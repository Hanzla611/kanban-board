import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task?.name?.length < 3)
      return toast.error("task must have more than 3 characters");

    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("task has been added successfully");
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };
  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 mr-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="title"
          type="text"
          value={task.name}
          onChange={(e) =>
            setTask({ ...task, name: e.target.value, id: uuidv4() })
          }
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-400 p-4 rounded-md ms-1"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
