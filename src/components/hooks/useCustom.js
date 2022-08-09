import { useEffect } from "react";

function useCustom(count) {
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);
}

export default useCustom;
