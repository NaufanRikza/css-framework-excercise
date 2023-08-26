import "./App.css";
import { Heading, Box, Flex } from "@chakra-ui/react";
import TodoItem from "./component/ToDoItem/ToDoItem";
import TodoInput from "./component/ToDoInput/ToDoInput";
import useTodoItems from "./hooks/todoItems-hooks";
import useCheckboxReader from "./hooks/checkbox-hooks";
import { useEffect } from "react";
import useItemCheckedCounter from "./hooks/todoItemCounter-hooks";

function App() {
  const [todoItemList, setTodoList] = useTodoItems([]);
  const [checkboxValues, setCheckBoxValues] = useCheckboxReader([]);
  const [checkedCounter, setCheckedCounter] = useItemCheckedCounter(0);

  useEffect(() => {
    const temp = checkboxValues.filter((item) => item === true);
    setCheckedCounter(temp.length);
  }, [checkboxValues]);

  return (
    <div className="todo-app">
      <Box>
        <Flex direction={"column"}>
          <Heading textAlign={"center"} color={"white"}>
            Chores ToDO List
          </Heading>

          <Box mt={8} mb={8}>
            <div>
              {todoItemList.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    id={item.id}
                    todoName={item.name}
                    hooks={{
                      todoItemList: { todoItemList, setTodoList },
                      checkBoxes: { checkboxValues, setCheckBoxValues },
                    }}
                  />
                );
              })}
            </div>
          </Box>

          <hr></hr>

          <Heading textAlign={"center"} color={"white"} mt={8}>
            Done : {checkedCounter}
          </Heading>

          <Box mt={8}>
            <TodoInput hooks={{ todoItemList, setTodoList }}></TodoInput>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default App;
