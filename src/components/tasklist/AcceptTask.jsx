import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="h-80 min-w-[320px] bg-red-400 rounded-xl p-5 flex flex-col shrink-0">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 text-white text-xs px-3 py-1 rounded">
          {data.category}
        </h3>

        <h4 className="text-sm text-white">
          {data.taskDate}
        </h4>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-4 text-white">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm mt-3 text-white flex-1 overflow-auto">
        {data.taskDescription}
      </p>

      {/* Buttons */}
      <div className="flex justify-between gap-3 mt-5">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-semibold">
          Mark as Completed
        </button>

        <button className="flex-1 bg-red-700 hover:bg-red-800 text-white py-2 rounded-lg text-sm font-semibold">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;