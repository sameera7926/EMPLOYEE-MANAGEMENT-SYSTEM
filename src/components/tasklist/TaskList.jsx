import React from "react";

function TaskNumber({ data }) {
  return (
    <div className="flex mt-10 justify-between gap-5">

      <div className="rounded-xl w-90 px-10 py-6 bg-red-400">
        <h2 className="text-2xl font-bold text-white">
          {data.taskNumber.active}
        </h2>
        <h3 className="text-xl font-semibold text-white">Active Task</h3>
      </div>

      <div className="rounded-xl w-90 px-10 py-6 bg-yellow-400">
        <h2 className="text-2xl font-bold text-white">
          {data.taskNumber.newTask}
        </h2>
        <h3 className="text-xl font-semibold text-white">New Task</h3>
      </div>

      <div className="rounded-xl w-90 px-10 py-6 bg-blue-400">
        <h2 className="text-2xl font-bold text-white">
          {data.taskNumber.completed}
        </h2>
        <h3 className="text-xl font-semibold text-white">Completed</h3>
      </div>

      <div className="rounded-xl w-90 px-10 py-6 bg-green-400">
        <h2 className="text-2xl font-bold text-white">
          {data.taskNumber.failed}
        </h2>
        <h3 className="text-xl font-semibold text-white">Failed</h3>
      </div>

    </div>
  );
}

export default TaskNumber;