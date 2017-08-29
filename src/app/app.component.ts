import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyword = 'TEST';
  data: any;

  constructor(private datasvc: DataService) {
    this.data = datasvc.data;
  }

  doSearch(value) {
    console.log(value);
  }

  deleteArticle(article) {
    let idx = this.data.indexOf(article);
    this.data.splice(idx, 1);
  }

}
