import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Column from "../components/Column";
import CreateTask from "../components/CreateTask";
import { useDispatch, useSelector } from "react-redux";
import ListTasks from "../components/ListTasks";
import { Toaster } from "react-hot-toast";
// import { addTodoTask } from "../utils/todoSlice";

function Dashboard() {
  const dispatch = useDispatch();
  // const taskData = useSelector((store) => store.task);
  const [tasks, setTasks] = useState([]);
//  useEffect(() => {
//   setTasks(JSON.parse(localStorage.getItem('tasks')));
//   console.log(tasks, "taaask");
// }, [])

  return (
    <>
    <Toaster/>
      <Header />
      <div>
        <CreateTask tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="flex ms-4 items-center text-center">
        <ListTasks tasks={tasks} setTasks={setTasks}/>
      </div>
    </>
  );
}

export default Dashboard;
