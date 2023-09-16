import React, { useEffect, useState } from "react";

function ListTasks({ tasks, setTasks }) {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  

  useEffect(() => {
    const fTodos = tasks?.filter((task) => task.status === "todo");
    const fProgress = tasks?.filter((task) => task.status === "inprogress");
    const fClosed = tasks?.filter((task) => task.status === "closed");

    setTodos(fTodos);
    setInProgress(fProgress);
    setClosed(fClosed);
  }, [tasks]);

  const statuses = ["todos", "inprogress", "closed"];

  return (
    <div className="flex gap-16">
      {statuses.map((status, index) => {
        return (
          <Section
            key={index}
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            todos={todos}
            inProgress={inProgress}
            closed={closed}
          />
        );
      })}
    </div>
  );
}

export default ListTasks;

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
  let text = "Todo";
  let bg = "bg-slate-400";
  let tasksToMap = todos;
  if (status === "inprogress") {
    text = "In progress";
    bg = "bg-blue-500";
    tasksToMap = inProgress;
  }

  if (status === "closed") {
    text = "Closed";
    bg = "bg-red-500";
    tasksToMap = closed;
  }

  return (
    <div className="w-64">
      <Header text={text} bg={bg} count={tasksToMap?.length  } />

      {tasksToMap > 0 &&
        tasksToMap?.map((task) => (
          <Task key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
        ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}
      <div className="ml-2 bg-white text-black h-5 w-5 rounded-full flex items-center justify-center ">{count}</div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {
    console.log(task, 'iddddd');
    const handleRemove = (id) => {
        const ftasks = tasks.filter(t => t.id !== id);
        localStorage.setItem('task', JSON.stringify(ftasks));
        setTasks(ftasks);
        toast("task removed", {icon :"☠️"})
    }
  return (
    <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grabbing flex justify-center items-center`}>
        {console.log(task,"asdfshdf")}
      <p>{task.name}</p>,
      <button className="absolute text-slate-500" onClick={()=>handleRemove(task.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};
