import { createStore } from "redux";
function reducer(state = { counter: 0 }, action) {
  if (action.type === "INCREMENT") return { counter: state.counter + 1 };
  if (action.type === "DECREMENT") return { counter: state.counter - 1 };
  else return state;
}
const store = createStore(reducer);
export default store;
