import React from "react";

const Counter = ({ counter, increase, decrease }) => {
  return (
    <div>
      <h2>counter = {counter} </h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
