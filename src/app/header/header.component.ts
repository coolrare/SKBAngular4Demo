import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  sitelink = 'https://www.google.com/';
  counter  = 10;

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    this.counter++;
    console.log($event);
    if ($event.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
