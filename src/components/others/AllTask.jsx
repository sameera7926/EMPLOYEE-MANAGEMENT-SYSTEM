

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div id="tasklist" className="p-5 rounded mt-5 h-100 overflow-auto">

      {/* Header */}
      <div className="bg-emerald-600 text-white mb-3 py-3 px-4 flex justify-between rounded-lg font-semibold">
        <h2 className="w-1/5">Employee</h2>
        <h2 className="w-2/5">Task</h2>
        <h2 className="w-1/5 text-center">Status</h2>
      </div>

      {userData?.employees?.map((employee) =>
        employee.tasks.map((task, index) => (
          <div
            key={`${employee.id}-${index}`}
            className="border border-emerald-500 mb-2 py-3 px-4 flex justify-between rounded-lg text-white"
          >
            <h2 className="w-1/5">{employee.firstName}</h2>

            <h2 className="w-2/5">{task.taskTitle}</h2>

            <h5 className="w-1/5 text-center">
              {task.completed
                ? "✅ Completed"
                : task.failed
                ? "❌ Failed"
                : task.active
                ? "🟡 Active"
                : task.newTask
                ? "🆕 New"
                : "Pending"}
            </h5>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTask;