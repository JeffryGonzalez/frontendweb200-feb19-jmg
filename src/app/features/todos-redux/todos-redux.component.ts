import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoListItem } from './models';
import { selectHeaderMessage, selectTodoListItems, TodosState } from './reducers';

@Component({
  selector: 'app-todos-redux',
  templateUrl: './todos-redux.component.html',
  styleUrls: ['./todos-redux.component.css']
})
export class TodosReduxComponent implements OnInit {

  message$: Observable<string>;
  todos$: Observable<TodoListItem[]>;

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
    this.message$ = this.store.select(selectHeaderMessage);
    this.todos$ = this.store.select(selectTodoListItems);
  }

  doneClicked() {
    this.store.dispatch({ type: 'CLICKY' });
  }
}
