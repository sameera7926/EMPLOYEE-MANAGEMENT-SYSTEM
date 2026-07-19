import React, { useState } from "react";

const CreateTasklist = () => {
  const [task, setTask] = useState({
    taskTitle: "",
    taskDate: "",
    assignTo: "",
    category: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const employee = employees.find(
      (emp) =>
        emp.firstName.toLowerCase() === task.assignTo.toLowerCase()
    );

    if (!employee) {
      alert("Employee not found");
      return;
    }

    employee.tasks.push({
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: task.taskTitle,
      taskDescription: task.description,
      taskDate: task.taskDate,
      category: task.category,
    });

    // Update task count
    employee.taskNumber.newTask += 1;

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    alert("Task Assigned Successfully");

    setTask({
      taskTitle: "",
      taskDate: "",
      assignTo: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form onSubmit={submitHandler}>
        <div className="mt-20 h-[37vh] flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">
                Task Title
              </h3>

              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
                value={task.taskTitle}
                onChange={(e) =>
                  setTask({
                    ...task,
                    taskTitle: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">
                Date
              </h3>

              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="date"
                value={task.taskDate}
                onChange={(e) =>
                  setTask({
                    ...task,
                    taskDate: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">
                Assign to
              </h3>

              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="Employee Name"
                value={task.assignTo}
                onChange={(e) =>
                  setTask({
                    ...task,
                    assignTo: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">
                Category
              </h3>

              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
                type="text"
                placeholder="Design, Development, HR..."
                value={task.category}
                onChange={(e) =>
                  setTask({
                    ...task,
                    category: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">
              Description
            </h3>

            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
              value={task.description}
              onChange={(e) =>
                setTask({
                  ...task,
                  description: e.target.value,
                })
              }
            ></textarea>

            <button
              type="submit"
              className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTasklist;