import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelink = 'https://www.google.com/';

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event) {
    console.log($event);
    this.sitename = 'The Will Will Web';
  }

}
