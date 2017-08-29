import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  load() {
    return this.http.get('/api/articles.json');
  }
}
