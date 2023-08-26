import { useState } from "react";

function useTodoItems(val = []) {
  const [todoItemList, setItemList] = useState(val);

  function setTodoItemList(val) {
    setItemList(val);
  }

  return [todoItemList, setTodoItemList];
}

export default useTodoItems;
