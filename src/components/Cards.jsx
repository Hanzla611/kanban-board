import React from "react";

const Cards = ({ taskData }) => {
  const { title, priority, date } = taskData;
  return (
    <div className="bg-white rounded-lg p-4 mb-2">
      <h2 className="text-black">{title}</h2>
      <div className="flex justify-between mt-10 align-middle">
        <span className=" flex text-lg text-gray-400">
          Priority: {priority}🔺
        </span>
        <div className="flex">
          <span className="mr-4 text-gray-400">Due Date:{" "}{date}</span>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <span className="text-xxl">⬅️</span>
        <span className="text-xxl">➡️</span>
      </div>
    </div>
  );
};

export default Cards;
