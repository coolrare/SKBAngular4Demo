import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = 'TEST';
  data: any;
  data$: Observable<any>;

  constructor(private datasvc: DataService) {
    this.data$ = datasvc.load();
  }

  doSearch(value) {
    console.log(value);
  }

  deleteArticle(article) {
    // let idx = this.data.indexOf(article);
    // this.data.splice(idx, 1);
    this.datasvc.remove(article.id).subscribe( res => {
      if (res.status == 200) {
        console.log(res.json());
      } else {
        console.log(res.text());
      }
    });
  }

}
