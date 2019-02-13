import { Action } from '@ngrx/store';

export interface State {
  heading: string;
}


const initialState: State = {
  heading: 'Redux Style Todo List'
};

export function reducer(state: State = initialState, action: Action): State {
  return state;
}
