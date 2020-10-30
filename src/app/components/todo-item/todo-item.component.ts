import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}
}
