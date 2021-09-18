import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  function incrementHandler() {
    dispatch({ type: "INCREMENT" });
  }
  function decrementHandler() {
    dispatch({ type: "DECREMENT" });
  }
  function increaseByHandler() {
    dispatch({ type: "INCREASEBY", val: 5 });
  }
  const toggle = useSelector((state) => state.toggle);
  function toggleCounterHandler() {
    dispatch({ type: "TOGGLE" });
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseByHandler}>increaseby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
