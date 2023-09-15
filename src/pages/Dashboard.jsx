import React from "react";
import { Pie, PieChart } from "recharts";
import Header from "../components/Header";
import Backlog from "../components/Backlog";
import Todo from "../components/Todo";
import Ongoing from "../components/Ongoing";
import Done from "../components/Done";
import Addtodo from "../components/Addtodo";
import { useDispatch, useSelector } from "react-redux";
import { addTodoTask } from "../utils/todoSlice";

function Dashboard() {
  const dispatch = useDispatch();

  const taskData = useSelector((store) => store.task);

  function handleDrag(e, task) {
    const taskData = JSON.stringify(task);
    e.dataTransfer.setData("taskdata", taskData);
  }

  function handleOnDrop(e) {
    const taskDataString = e.dataTransfer.getData("taskdata");
    const taskType = JSON.parse(taskDataString);
    dispatch(addTodoTask(taskType));
  }

  function handleDragOver(e) {
    e.preventDefault();
  }
  return (
    <>
      <Header />
      <div>
        <Addtodo />
      </div>
      <div className="flex ms-4">
        <Backlog
          taskData={taskData}
          handleDrag={handleDrag}
          handleOnDrop={handleOnDrop}
          handleDragOver={handleDragOver}
        />
        <Todo
          handleDrag={handleDrag}
          handleOnDrop={handleOnDrop}
          handleDragOver={handleDragOver}
        />
        <Ongoing />
        <Done />
      </div>
    </>
  );
}

export default Dashboard;
