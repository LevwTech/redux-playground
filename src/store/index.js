import { createStore } from "redux";
function reducer(
  state = { counter: 0, toggle: true, isLogged: false },
  action
) {
  if (action.type === "INCREMENT")
    return { counter: state.counter + 1, toggle: state.toggle };
  if (action.type === "DECREMENT")
    return { counter: state.counter - 1, toggle: state.toggle };
  if (action.type === "INCREASEBY")
    return { counter: state.counter + action.val, toggle: state.toggle };
  if (action.type === "TOGGLE")
    return { counter: state.counter, toggle: !state.toggle };
  if (action.type === "LOGIN")
    return { isLogged: true, counter: state.counter, toggle: state.toggle };
  if (action.type === "LOGOUT")
    return { isLogged: false, counter: state.counter, toggle: state.toggle };
  else return state;
}
const store = createStore(reducer);
export default store;
