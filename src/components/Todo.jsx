import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";

const Todo = ({ handleOnDrop, handleDragOver, handleDrag, setComponenetName, taskData }) => {
  const todoData = useSelector((store) => store.todo);
  return (
    <div
      className="w-1/4 m-2 bg-gray-100 min-h-full rounded-sm p-2"
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
    >
      <h2 className="text-gray-500 mb-8 px-4 pt-3">Todo</h2>
      <div>
        {todoData.map((widgetData) => (
          <div draggable key={widgetData} onDragStart={(e) => handleDrag(e, taskData)}>
            <Cards taskData={widgetData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
