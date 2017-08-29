import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: any;

  constructor(private datasvc: DataService) { }

  ngOnInit() {
  }

  doDelete() {
    this.datasvc.remove(this.article.id).subscribe(res => {
      if (res.status == 200) {
        console.log(res.json());
      } else {
        console.log(res.text());
      }
    });
  }
}
