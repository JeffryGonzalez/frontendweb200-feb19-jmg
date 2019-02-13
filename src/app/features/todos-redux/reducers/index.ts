import * as fromMessage from './messages.reducer';

export interface TodosState {
  message: fromMessage.State;
}

export const reducers = {
  message: fromMessage.reducer
};
