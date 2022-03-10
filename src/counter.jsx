import React, { useState } from "react";
import "./App.css";
function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const color = counter === 0 ? "red" : "green";
  return (
    <div>
      <h1>{counter}</h1>
      <button
        style={{ BackgroundColor: "green" }}
        className="plus-button"
        onClick={increment}
      >
        +1
      </button>
      <button
        style={{ BackgroundColor: "red" }}
        className="delete-button"
        onClick={decrement}
      >
        -1
      </button>
    </div>
  );
}
export default Counter;
