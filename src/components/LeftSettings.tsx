import React from "react";
import RigthTodoMaker from "./RigthTodoMaker";
import { ATodo } from "../todoData";

interface LeftSettingsProps {
  addTodo: (todo: ATodo) => void;
  setFilter: (filter: string) => void;
}

const LeftSettings: React.FC<LeftSettingsProps> = ({ addTodo, setFilter }) => {
  return (
    <div className="w-full h-full px-10 py-4">
      <div className="w-full gap-2 flex flex-col">
        <h1 className="text-3xl mb-6 text-center border-b-2 pb-2">Filters</h1>
        <button onClick={() => setFilter("all")} className="text-xl">All Todo</button>
        <button onClick={() => setFilter("in-progress")} className="text-xl">In Progress</button>
        <button onClick={() => setFilter("urgent")} className="text-xl">Urgent</button>
        <button onClick={() => setFilter("completed")} className="text-xl">Completed</button>
      </div>
      <RigthTodoMaker addTodo={addTodo} />
    </div>
  );
};

export default LeftSettings;
