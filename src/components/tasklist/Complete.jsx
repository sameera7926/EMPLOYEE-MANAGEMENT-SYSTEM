import React from "react";

const Complete = ({ data }) => {
  return (
    <div className="h-80 w-[320px] bg-green-400 rounded-xl p-5 flex flex-col shrink-0">

      <div className="flex items-center justify-between">
        <h3 className="bg-green-600 text-white text-xs px-3 py-1 rounded">
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

      <button className="w-full bg-green-700 text-white py-2 rounded-lg mt-5 font-semibold">
        Completed
      </button>

    </div>
  );
};

export default Complete;