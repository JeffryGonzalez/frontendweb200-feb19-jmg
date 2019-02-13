import { createEntityAdapter, EntityState } from '@ngrx/entity';
// import { Action } from '@ngrx/store';
import * as actions from '../actions/todos.actions';
export interface TodoEntity {
  id: string;
  description: string;
}

export interface State extends EntityState<TodoEntity> { }

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', description: 'Clean Garage' },
    2: { id: '2', description: 'Fix Downspout' }
  }
};

export const adapter = createEntityAdapter<TodoEntity>();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ADD_TODO: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
