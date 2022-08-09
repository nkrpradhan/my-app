import React, { useState } from "react";
import useCustom from "./useCustom";
import useCounter from "./useCounter";
function Doctitle() {
  const [count, setCount] = useCounter();
  useCustom(count);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
    </>
  );
}

export default Doctitle;
