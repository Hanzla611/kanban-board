import React from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const Backlog = () => {
  const taskData = useSelector((store) => store.task);
  console.log(taskData, "taskdata");
  return (
    <div className="w-1/4 m-2 bg-gray-100 h-full rounded-sm p-2">
      <h2 className="text-gray-500 mb-8 px-4 pt-3">Backlog </h2>
      {taskData && taskData?.map((taskData) => (
        <Cards taskData={taskData} />
      ))}
    </div>
  );
};

export default Backlog;
