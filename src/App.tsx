import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export enum Filter {
  SHOW_ALL = "모든 할 일 보기",
  HIDE_COMPLETED = "완료된 할 일 숨기기",
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "할 일 1", completed: false },
    { id: 2, text: "할 일 2", completed: false },
    { id: 3, text: "할 일 3", completed: true },
  ]);

  const [filter, setFilter] = useState<Filter>(Filter.SHOW_ALL);

  const toggleFilter = () => {
    switch (filter) {
      case Filter.SHOW_ALL:
        setFilter(Filter.HIDE_COMPLETED);
        break;
      case Filter.HIDE_COMPLETED:
        setFilter(Filter.SHOW_ALL);
        break;
      default:
        setFilter(Filter.SHOW_ALL);
    }
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <button className="btn_completed" onClick={toggleFilter}>
        {filter}
      </button>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        showCompleted={filter === Filter.SHOW_ALL}
      />
    </div>
  );
};

export default App;
