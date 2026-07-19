import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Complete from "./Complete";
import Failed from "./Failed";

const TaskList = ({ data }) => {
  if (!data || !data.tasks) {
    return <h2 className="text-white mt-10">No Tasks Found</h2>;
  }

  return (
    <div
      id="tasklist"
      className="mt-10 h-[55%] w-full flex items-center gap-5 overflow-x-auto py-5 px-2"
    >
      {data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index} data={task} />;
        }

        if (task.newTask) {
          return <NewTask key={index} data={task} />;
        }

        if (task.completed) {
          return <Complete key={index} data={task} />;
        }

        if (task.failed) {
          return <Failed key={index} data={task} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;