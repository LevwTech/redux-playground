import { createStore } from "redux";
const initialState = { counter: 0, toggle: true, isLogged: false };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "INCREASEBY":
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case "TOGGLE":
      return {
        ...state,
        toggle: !state.toggle,
      };
    case "LOGIN":
      return { ...state, isLogged: true };
    case "LOGOUT":
      return { ...state, isLogged: false };
    default:
      return state;
  }
}
const store = createStore(reducer);
export default store;
