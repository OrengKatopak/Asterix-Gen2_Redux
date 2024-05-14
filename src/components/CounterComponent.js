import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slices/counterSlice";
import "./Counter.css";
function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div class="container">
      <h2 class="asterix">Counter</h2>
      <div class="click">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span class="angka">{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div class="click2">
        <input type="number" onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))} placeholder="Enter value" />
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </div>
  );
}
export default CounterComponent;
