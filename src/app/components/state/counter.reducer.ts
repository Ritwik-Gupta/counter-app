import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { customIncrement, decrement, increment, reset } from "./counter.actions";


const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {return {count: state.count + 1}}),
  on(decrement, (state) => {return {count: state.count - 1}}),
  on(reset, (state) => {return {count: 0}}),
  on(customIncrement, (state, customValue) => {return {count: state.count + customValue.value}})
);


export function counterReducer(state: any, actions: any) {
  return _counterReducer(state, actions)
}
