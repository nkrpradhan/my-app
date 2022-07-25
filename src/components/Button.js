import React, { useState } from "react";

function Button() {
  const [initialValue, setInitialValue] = useState(0);

  function increment() {
    setInitialValue((val) => val + 1);
    // setInitialValue(initialValue + 1);
  }

  function decrement() {
    initialValue > 0 && setInitialValue((val) => val - 1);
  }
  return (
    <>
      <div>value --{initialValue}</div>
      <button
        style={{
          width: "100px",
          backgroundColor: "grey",
          borderRadius: "5px",
        }}
        onClick={() => increment()}
      >
        +
      </button>
      <h1>Use the plus to increment</h1>
      <div>
        <button onClick={() => decrement()}>-</button>
        <h1>Use the minus to decrement</h1>
      </div>
    </>
  );
}

export default Button;
