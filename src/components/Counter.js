import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-content-center space-y-5 bg-light rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
