import { useState } from "react";

function useItemCheckedCounter(val = 0) {
  const [checkedCounter, setCounter] = useState(val);

  function setCheckedCounter(val = 0) {
    setCounter(val);
  }
  return [checkedCounter, setCheckedCounter];
}

export default useItemCheckedCounter;
