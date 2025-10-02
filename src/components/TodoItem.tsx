import { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "완료 취소" : "완료"}
      </button>
    </li>
  );
};

export default TodoItem;
