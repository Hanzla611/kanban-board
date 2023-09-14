import React from "react";
import { Pie, PieChart } from "recharts";
import Header from "../components/Header";
import Backlog from "../components/Backlog";
import Todo from "../components/Todo";
import Ongoing from "../components/Ongoing";
import Done from "../components/Done";
import Addtodo from "../components/Addtodo";

function Dashboard() {
  return (
    <>
      <Header />
      <div>
        <Addtodo />
      </div>
      <div className="flex ms-4">
        <Backlog />
        <Todo />
        <Ongoing />
        <Done />
      </div>
    </>
  );
}

export default Dashboard;
