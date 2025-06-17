import { createReducer, on } from '@ngrx/store';

const initialState = 0; // It can be anything (object, array, ...)

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => state + action.value)
// );

export function counterReducer(state = initialState, action: any) {
  return action.type === '[Counter] Increment' ? state + action.value : state;
}
