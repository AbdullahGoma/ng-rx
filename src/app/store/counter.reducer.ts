import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0; // It can be anything (object, array, ...)

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state++)
);

// export function counterReducer(state = initialState) {
//     return state;
// } 