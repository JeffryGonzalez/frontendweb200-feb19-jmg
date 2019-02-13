import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
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

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
