import { useState } from "react";

function useInputReader(val = "") {
  const [inputValue, setVal] = useState(val);

  function setInputValue(val) {
    setVal(val);
  }

  return [inputValue, setInputValue];
}

export default useInputReader;
