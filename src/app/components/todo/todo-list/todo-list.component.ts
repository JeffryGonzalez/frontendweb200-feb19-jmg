import { Component, Input, OnInit } from '@angular/core';
import { TodoItem, TodoList } from '../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() list: TodoList;
  constructor() { }

  ngOnInit() {
  }

  markCompleted(item: TodoItem) {
    item.completed = true;
  }
}
