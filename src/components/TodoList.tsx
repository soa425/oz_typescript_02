import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  showCompleted: boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  showCompleted,
}) => {
  const filteredTodos = showCompleted
    ? todos
    : todos.filter((todo) => !todo.completed);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TodoList;
