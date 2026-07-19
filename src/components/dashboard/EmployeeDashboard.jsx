import React from "react";
import Header from "../others/Header";
import TaskNumber from "../others/TaskNumber";
import TaskList from "../tasklist/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-10 bg-[#1C1C1C] min-h-screen">
      <Header data={data} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;