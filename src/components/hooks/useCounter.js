import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return [count, setCount];
}

export default useCounter;
