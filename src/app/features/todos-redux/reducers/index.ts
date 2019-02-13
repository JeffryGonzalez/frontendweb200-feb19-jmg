import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListItem } from '../models';
import * as fromMessage from './messages.reducer';
import * as fromTodos from './todos.reducer';
export interface TodosState {
  message: fromMessage.State;
  todos: fromTodos.State;
}

export const reducers = {
  message: fromMessage.reducer,
  todos: fromTodos.reducer
};

// 1. Create A Feature Selector
const selectTodosFeature = createFeatureSelector<TodosState>('todosFeature');
// 2. Create a Selector for Each Branch of the Feature
const selectMessage = createSelector(selectTodosFeature, f => f.message);
const selectTodos = createSelector(selectTodosFeature, f => f.todos);
// 3. Create any "helpers" you might need (optional)
const { selectAll: selectTodosEntityArray } = fromTodos.adapter.getSelectors(selectTodos);

// 4. Create a selector for what the component needs.

// selectHeading: string
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
export const selectGreeting = createSelector(selectMessage, b => b.greeting);
// TodoEntity[] => TodoListItem[]
export const selectTodoListItems = createSelector(selectTodosEntityArray, t => t.map(x => x as TodoListItem));
