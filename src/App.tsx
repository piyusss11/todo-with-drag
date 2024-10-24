import React, { useState } from "react";
import LeftSettings from "./components/LeftSettings"; 
import TodoList from "./components/TodoList";
import { ATodo } from "./todoData"; // Import Todo interface

function App() {
  const [todos, setTodos] = useState<ATodo[]>([]);
  const [filter, setFilter] = useState<string>("all");

  // Function to add new todo
  const addTodo = (newTodo: ATodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Function to delete a todo by index
  const deleteTodo = (indexToDelete: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== indexToDelete));
  };

  // Function to mark todo as completed
  const toggleComplete = (indexToComplete: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) =>
        index === indexToComplete ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Apply filters based on current filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "in-progress") return !todo.completed;
    if (filter === "urgent") return todo.priority === "urgent";
    if (filter === "all") return true;
    return true;
  });

  return (
    <div className="h-full w-full text-white">
      <nav className="px-10 py-4 text-center text-3xl bg-gray-400">Todo</nav>
      <div className="flex w-full h-full">
        <div className="w-1/4 h-full">
          <LeftSettings addTodo={addTodo} setFilter={setFilter} />
        </div>
        <div className="bg-black w-3/4">
          <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
        </div>
      </div>
    </div>
  );
}

export default App;
