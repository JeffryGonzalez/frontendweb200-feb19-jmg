import { Action } from '@ngrx/store';

export interface State {
  heading: string;
  greeting: string;
}


const initialState: State = {
  heading: 'Redux Style Todo List',
  greeting: 'Welcome to the Jungle'
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'CLICKY': {
      return {
        heading: state.heading.toUpperCase(),
        greeting: state.greeting
      };
    }
    default: {
      return state;
    }
  }

}
