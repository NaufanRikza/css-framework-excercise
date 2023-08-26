import { useState } from "react";

function useCheckboxReader(val = []) {
  const [checkboxValues, setValues] = useState(val);

  function setCheckBoxValues(val = []) {
    setValues(val);
  }

  return [checkboxValues, setCheckBoxValues];
}

export default useCheckboxReader;
