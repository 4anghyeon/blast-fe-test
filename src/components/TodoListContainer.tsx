import TodoListInputBox from "./TodoListInputBox.tsx";
import TodoListBox from "./TodoListBox.tsx";
import {useTodoStore} from "../store/todo-store.ts";

const TodoListContainer = () => {
  const reset = useTodoStore(state => state.reset)

  return (
    <div>
      <button onClick={reset}>초기화</button>
      <button>정렬</button>
      <TodoListInputBox />
      <TodoListBox />
    </div>
  );
};

export default TodoListContainer;
