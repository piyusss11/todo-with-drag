import React from "react";
import { ATodo } from "../todoData";

interface TodoListProps {
  todos: ATodo[];
  deleteTodo: (index: number) => void;
  toggleComplete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <div className="px-10 py-4">
      <h2 className="text-center text-2xl mb-4">Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="mb-4 p-4 border rounded-md">
              <h3 className={`font-bold ${todo.completed ? "line-through" : ""}`}>{todo.heading}</h3>
              <p>{todo.description}</p>
              <p className={`font-semibold ${getPriorityClass(todo.priority)}`}>
                Priority: {todo.priority}
              </p>
              <button onClick={() => toggleComplete(index)} className="bg-blue-500 px-2 py-1 rounded-md">
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTodo(index)} className="bg-red-500 ml-4 px-2 py-1 rounded-md">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Optional helper function to style priority levels
const getPriorityClass = (priority: "urgent" | "medium" | "low") => {
  switch (priority) {
    case "urgent":
      return "text-red-500";
    case "medium":
      return "text-yellow-500";
    case "low":
      return "text-green-500";
    default:
      return "";
  }
};

export default TodoList;
