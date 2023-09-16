import React, { useState } from "react";
import Header from "../components/Header";
import Backlog from "../components/Backlog";
import Todo from "../components/Todo";
import Ongoing from "../components/Ongoing";
import Done from "../components/Done";
import Addtodo from "../components/Addtodo";
import { useDispatch, useSelector } from "react-redux";
// import { addTodoTask } from "../utils/todoSlice";


function Dashboard() {
  const dispatch = useDispatch();
  const taskData = useSelector((store) => store.task);
  
  return (
    <>
      <Header />
      <div>
        <Addtodo />
      </div>
      <div className="flex ms-4">
        <Backlog
          taskData={taskData}
          setComponenetName={setComponenetName}
        />
        <Todo
          setComponenetName={setComponenetName}
        />
        <Ongoing />
        <Done />
      </div>
    </>
  );
}

export default Dashboard;
