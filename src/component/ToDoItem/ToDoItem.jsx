import style from "./ToDoItem.module.css";
import { Checkbox, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

function TodoItem(props) {
  const { todoItemList, setTodoList } = props.hooks.todoItemList;
  const { todoName, id } = props;
  const { checkboxValues, setCheckBoxValues } = props.hooks.checkBoxes;
  return (
    <div className={style.container}>
      <div className={style.container_checkbox}>
        <Checkbox
          borderColor={"green.400"}
          onChange={(e) => {
            const isChecked = e.target.checked;
            const temp = [...checkboxValues];
            temp[id] = isChecked;
            setCheckBoxValues(temp);
          }}
        ></Checkbox>
      </div>

      <div className={style.container_text}>
        <Text color={"white"} fontWeight={"bold"} fontSize={18}>
          {todoName}
        </Text>
      </div>

      <div className="container-button">
        <IconButton
          variant={"outline"}
          borderColor={"red.400"}
          icon={<DeleteIcon color={"red.400"}></DeleteIcon>}
          onClick={() => {
            todoItemList.splice(id, 1);
            checkboxValues.splice(id, 1);
            setTodoList([...todoItemList]);
            setCheckBoxValues([...checkboxValues]);
          }}
        ></IconButton>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number,
  hooks: PropTypes.object,
  todoName: PropTypes.string,
};

export default TodoItem;
