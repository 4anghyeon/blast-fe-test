import {useTodoStore} from "../store/todo-store.ts";
import TodoListRow from "./TodoListRow.tsx";

const TodoListBox = () => {
  const todos = useTodoStore(state => state.todos)
  return (
    <div>
      {todos.map(todo => <TodoListRow key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoListBox;
