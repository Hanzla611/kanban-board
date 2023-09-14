import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../utils/taskSlice";

const Addtodo = () => {
  const dispatch = useDispatch();
  const[disabled, setDisabled] = useState(false);
  const taskData = useSelector((store) => store.task);
  const title = useRef();
  const stage = useRef();
  const priority = useRef();
  const date = useRef();

  const handleButtonClick = () => {
    if(title && stage && priority && date){
      setDisabled(false)
      dispatch(
        addTask({
          title: title.current.value,
          stage: stage.current.value,
          priority: priority.current.value,
          date: date.current.value,
        })
      );
    }
 
  };

  return (
    <div className=" ml-6 mb-12 mt-8 flex ">
      <div>
        <label
          for="name"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Task name
        </label>
        <div className="flex">
          <input
            ref={title}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/6 mr-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            required=""
          />
          <input
            ref={stage}
            type="number"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-20 mr-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="stage"
            required=""
          />
          <input
            ref={priority}
            type="text"
            name="name"
            id="name"
            className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="priority"
            required=""
          />
          <input
            ref={date}
            type="date"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-36 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Due date"
            required=""
          />
          <button
            onClick={handleButtonClick}
            className="bg-blue-400 p-4 rounded-md ms-1"
            disabled={disabled}
          >
            Add
          </button>
        </div>
      </div>
      <h3 className="text-sm flex font-bold ml-8 mr-4">Total count: {taskData.length}</h3>
      <h3 className="text-sm flex font-bold ml-8 mr-4">Pending count: 0</h3>
      <h3 className="text-sm flex font-bold ml-8 mr-4">Completed: 0</h3>
    </div>
  );
};

export default Addtodo;
