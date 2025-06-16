import { createReducer } from "@ngrx/store";

const initialState = 0; // It can be anything (object, array, ...)

// export const counterReducer = createReducer(
//     initialState
// );

export function counterReducer(state = initialState) {
    return state;
} 