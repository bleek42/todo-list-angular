import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName: string;
  author: string;

  constructor() {
    this.appName = 'angular todo list';
    this.author = 'brandon leek';
  }
}
