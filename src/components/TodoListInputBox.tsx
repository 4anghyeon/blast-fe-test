import { nanoid } from 'nanoid'
import {useRef} from "react";
import {useTodoStore} from "../store/todo-store.ts";

const TodoListInputBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const add = useTodoStore(state => state.add);

  const addHandler = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value)
      add({
        id:  nanoid(),
        content: inputRef.current.value,
        createDate: new Date().toISOString(),
        status: 'idle'
      })
      inputRef.current.value = '';
    }
  }

  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={addHandler}>작업추가</button>
    </div>
  );
};

export default TodoListInputBox;
