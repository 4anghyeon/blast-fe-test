import {StatusType, TodoType, useTodoStore} from "../store/todo-store.ts";
import {useRef} from "react";

const TodoListRow = ({todo}: { todo: TodoType }) => {
  const remove = useTodoStore(state => state.remove);
  const changeState = useTodoStore(state => state.changeState);
  const selectRef = useRef<HTMLSelectElement>(null)

  const handleChange = () => {
    if (selectRef.current) {
      changeState(todo.id, selectRef.current.value as StatusType)
    }
  }

  return (
    <div>
      <span>{todo.content}</span>
      <span>{todo.createDate}</span>
      <select defaultValue={todo.status} onChange={handleChange} ref={selectRef}>
        <option value={'idle'}>미시작</option>
        <option value={'doing'}>진행중</option>
        <option value={'complete'}>완료</option>
      </select>
      <button onClick={() => remove(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoListRow;
