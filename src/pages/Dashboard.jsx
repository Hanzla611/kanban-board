import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Column from "../components/Column";
import CreateTask from "../components/CreateTask";
import { useDispatch, useSelector } from "react-redux";
import ListTasks from "../components/ListTasks";
import { Toaster } from "react-hot-toast";
import Kanban from "../components/Kanban";
// import { addTodoTask } from "../utils/todoSlice";

function Dashboard() {
  return (
    <>
      <Toaster />
      <Header />
      <Kanban/>
    </>
  );
}

export default Dashboard;
