import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="h-80 w-[320px] bg-blue-400 rounded-xl p-5 flex flex-col shrink-0">

      <div className="flex items-center justify-between">
        <h3 className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
          {data.category}
        </h3>

        <h4 className="text-sm text-white">
          {data.taskDate}
        </h4>
      </div>

      <h2 className="text-2xl font-bold mt-4 text-white">
        {data.taskTitle}
      </h2>

      <p className="text-sm mt-3 text-white flex-1 overflow-hidden">
        {data.taskDescription}
      </p>

      <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg text-sm font-semibold mt-5">
        Accept Task
      </button>

    </div>
  );
};

export default NewTask;