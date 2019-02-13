import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMessage from './messages.reducer';
export interface TodosState {
  message: fromMessage.State;
}

export const reducers = {
  message: fromMessage.reducer
};

// 1. Create A Feature Selector
const selectTodosFeature = createFeatureSelector<TodosState>('todosFeature');
// 2. Create a Selector for Each Branch of the Feature
const selectMessage = createSelector(selectTodosFeature, f => f.message);
// 3. Create any "helpers" you might need (optional)

// 4. Create a selector for what the component needs.

// selectHeading: string
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
