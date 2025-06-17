import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

// import { increment } from './counter.actions';

const initialState = 0; // It can be anything (object, array, ...)

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);

// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   return action.type === INCREMENT ? state + (action as IncrementAction).value : state;
// }
