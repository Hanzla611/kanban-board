import React from "react";
import Cards from "./Cards";

const Column = ({ title, taskData }) => {
  return (
    <div className="w-5/6 m-2 bg-gray-100 h-full rounded-sm p-2">
      <h2 className="text-gray-500 mb-8 px-4 pt-3">{title} </h2>
      {taskData &&
        taskData?.map((taskData) => (
          <div key={taskData.id} draggable>
            <Cards taskData={taskData} />
          </div>
        ))}
    </div>
  );
};

export default Column;
