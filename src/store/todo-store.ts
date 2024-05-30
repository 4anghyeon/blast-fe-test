import {create} from 'zustand'

export type StatusType = 'idle' | 'doing' | 'completed';
// type OrderType = 'ascending' | 'descending';

export interface TodoType {
  content: string;
  createDate: string;
  id: string;
  status: StatusType
}

interface TodoState {
  todos: TodoType[];
  add: (todo: TodoType) => void;
  remove: (id: string) => void;
  reset: () => void;
  changeState: (id: string, status: StatusType) => void;
  // sort: (order: OrderType) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  add: (todo) => set((state) => ({todos: [...state.todos, todo]})),
  remove: (id) => set((state) => ({todos: state.todos.filter(todo => todo.id !== id)})),
  reset: () => set(() => ({todos: []})),
  changeState: (id: string, status: StatusType) => set((state) => ({
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        todo.status = status;
      }
      return todo;
    })
  })),
  // sort: (order) => set((state) => ({todos: todos.sort((a:TodoType,b:TodoType) => a.content - b.content)})),
}))