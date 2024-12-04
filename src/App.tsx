import { useState } from "react";
import "./App.css";
import EditTask from "./components/editTask";
import Header from "./components/header";
import Tasks from "./components/tasks";
import Upgrade from "./components/upgrade";

interface Edit {
  id: number;
  name: string;
  checked: false;
}

function App() {
  const [option, setOption] = useState("new task");
  const [taskName, setTaskName] = useState("");

  const [task, setTask] = useState([
    {
      id: 1,
      name: "Task 1",
      checked: false,
    },
    {
      id: 2,
      name: "Task 2",
      checked: false,
    },
  ]);

  const [editTasksValue, setEditTasksValue] = useState<Edit>({
    id: 0,
    name: "",
    checked: false,
  });

  const add_new_task = (name: string) => {
    const newTask = { id: Date.now(), name, checked: false };
    setTask([...task, newTask]);
    setEditTasksValue({
      id: 0,
      name: "",
      checked: false,
    });
    setTaskName("");
  };

  const get_Task_details = (taskId: number) => {
    setOption("edit task");
    const taskToEdit = task.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditTasksValue(taskToEdit as Edit);
    } else {
      console.error(`Task with ID ${taskId} not found.`);
    }
  };

  const edit_task = (editedTask: Edit) => {
    const updatedTasks = task.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTask(updatedTasks);
    setEditTasksValue({
      id: 0,
      name: "",
      checked: false,
    });
  };

  const delete_task = (taskId: number) => {
    setTask(task.filter((task) => task.id !== taskId));
  };
  return (
    <>
      <div className="w-full h-screen  flex ">
        <div className="bg-white shadow-2xl w-[40%] h-full flex flex-col justify-between ">
          <div className="h-[90%]">
            <Header />
            <Upgrade />
            <div className="h-[70%]  overflow-scroll  ">
              <div className=" overflow-scroll">
                <Tasks
                  task={task}
                  get_Task_details={get_Task_details}
                  setTask={setTask}
                />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end p-4 h-[10%]  ">
            <button
              className="rounded-full bg-[#3556AB] border-2 border-[#123EB1] w-[60px] shadow-md h-[61px]  text-center text-white text-[30px] inner-shadow custom-shadow "
              onClick={() => {
                setOption("new task");
                setTaskName("");
                setEditTasksValue({
                  id: 0,
                  name: "",
                  checked: false,
                });
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="w-[60%] h-[100%] ">
          <EditTask
            option={option}
            taskName={taskName}
            setTaskName={setTaskName}
            editTasksValue={editTasksValue}
            deleteTask={delete_task}
            addNewTask={add_new_task}
            editTask={edit_task}
          />
        </div>
      </div>
    </>
  );
}

export default App;
