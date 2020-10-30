import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'take dutch for a skateboard ride',
        isComplete: false,
      },
      {
        id: 2,
        title: 'get 4 leads at work',
        isComplete: false,
      },
      {
        id: 3,
        title: 'get groceries',
        isComplete: false,
      },
    ];
  }
}
