import React from "react";
import Cards from "./Cards";

const Backlog = ({ taskData, handleDrag, handleOnDrop, handleDragOver }) => {
  return (
    <>
      <div
        className="w-1/4 m-2 bg-gray-100 h-full rounded-sm p-2"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        <h2 className="text-gray-500 mb-8 px-4 pt-3">Backlog </h2>
        {taskData &&
          taskData?.map((taskData) => (
            <div
              key={taskData.id}
              draggable
              onDragStart={(e) => handleDrag(e, taskData)}
            >
              <Cards taskData={taskData} />
            </div>
          ))}
      </div>
      {/* <div
        className="bg-gray-100 p-12"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        {todoData.map((widgetData) => (
          <div key={widgetData}>
            <Cards taskData={widgetData} />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Backlog;
