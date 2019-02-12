import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoList } from './models';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  stuff: TodoList = {
    items: [
      { id: '1', description: 'Shovel Snow', completed: false },
      { id: '2', description: 'Change Oil', completed: true },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

  addNewItem(description: string) {
    const itemToAdd: TodoItem = {
      description,
      completed: false,
      id: '99'
    };

    this.stuff.items = [itemToAdd, ... this.stuff.items];
  }

}
