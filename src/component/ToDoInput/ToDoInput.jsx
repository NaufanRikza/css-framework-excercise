import style from "./ToDoInput.module.css";
import { Text, Input, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import useInputReader from "../../hooks/inputReader-hooks";

function TodoInput(props) {
  let { todoItemList, setTodoList } = props.hooks;
  const [inputValue, setInputValue] = useInputReader("");
  return (
    <div className={style.container}>
      <div className={style.container_text}>
        <Text color={"white"}>Add Todo</Text>
      </div>
      <div>
        <Input
          textColor={"white"}
          mb={6}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></Input>
      </div>
      <div>
        <Button
          bg={"blue.300"}
          onClick={() => {
            if (inputValue === "") {
              return;
            }
            const obj = {
              id: todoItemList.length,
              name: inputValue,
            };

            todoItemList.push(obj);
            setTodoList([...todoItemList]);
            setInputValue("");
          }}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
}

TodoInput.propTypes = {
  hooks: PropTypes.object,
};

export default TodoInput;
