import React, { useState } from "react";
import { ATodo } from "../todoData";

interface RigthTodoMakerProps {
  addTodo: (todo: ATodo) => void;
}

const RigthTodoMaker: React.FC<RigthTodoMakerProps> = ({ addTodo }) => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<ATodo["priority"]>("medium");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todoData: ATodo = {
      heading,
      description,
      priority,
      completed: false, // New todo is incomplete by default
    };

    addTodo(todoData);
    setHeading("");
    setDescription("");
    setPriority("medium");
  };

  return (
    <div className="my-6">
      <section className="text-center text-2xl mb-4 border-b-2">Create Todo</section>
      <form className="flex flex-col w-80" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 mb-4" htmlFor="heading">
          Heading
          <input
            id="heading"
            placeholder="Enter heading"
            className="bg-gray-200 rounded-md text-black font-semibold outline-none px-2 py-1"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2 mb-4" htmlFor="description">
          Description
          <textarea
            id="description"
            placeholder="Enter description"
            className="bg-gray-200 rounded-md text-black font-semibold outline-none px-2 py-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2 mb-4" htmlFor="priority">
          Priority
          <select
            id="priority"
            className="bg-gray-200 rounded-md text-black font-semibold outline-none px-2 py-1"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option className="text-white" value="urgent">Urgent</option>
            <option className="text-white" value="medium">Medium</option>
            <option className="text-white" value="low">Low</option>
          </select>
        </label>
        <button type="submit" className="bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-200">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default RigthTodoMaker;
