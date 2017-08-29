import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  load() {
    return this.http.get('/api/articles.json')
      .map(res => res.json());
  }

  remove(id) {
    return this.http.delete('/api/articles/' + id);
  }
}
