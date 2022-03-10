import React, { useState } from "react";
import "./counter.css";
import Counter from "./counter.jsx";

function App() {
  const [counterArray, setCounterArray] = useState([1, 2]);
  const addCounter = () => {
    setCounterArray([...counterArray, counterArray.length + 1]);
  };
  const deleteCounter = () => {
    if (counterArray.length > 0) {
      var temparr = counterArray;
      temparr.pop();
      setCounterArray([...temparr]);
    }
  };
  // spread opporator
  return (
    <div>
      {counterArray.map((elem, idx) => {
        return <Counter />;
      })}
      <button onClick={addCounter}>add counter</button>
      <button onClick={deleteCounter}>remove counter</button>
    </div>
  );
}

export default App;
