interface Edit {
  id: number;
  name: string;
  checked: false;
}

interface Edittask {
  option: string;
  editTasksValue: Edit;
  taskName: string;
  setTaskName: (value: string) => void;
  deleteTask: (value: number) => void;
  addNewTask: (value: string) => void;
  editTask: (value: Edit) => void;
}

const EditTask = ({
  option,
  editTasksValue,
  deleteTask,
  addNewTask,
  editTask,
  taskName,
  setTaskName,
}: Edittask) => {
  return (
    <div className="h-[100%]">
      <div className="bg-[#3556AB] p-10 flex gap-4 text-white font-medium text-[24px] items-center justify-center custom-shadow   h-[150px] inner-shadow-black">
        {option === "new task" && <p>Add New Task</p>}
        {option === "edit task" && <p>Edit Task</p>}
      </div>
      <div className="flex flex-col justify-between h-[85%] border ">
        <div className="m-5">
          <p className="mb-3 text-[16px] font-normal tracking-widest">
            Task Name
          </p>
          <input
            type="text"
            defaultValue={editTasksValue.name}
            onChange={(e) => setTaskName(e.target.value)}
            className="border border-[#CBCBCB] outline-none bg-white text-[#0D2972]  p-3 w-full rounded shadow-md "
          />
        </div>
        <div className="flex items-center gap-3 m-5">
          <button
            className="bg-[#AB3535] border-2 border-[#720D0D] px-5 py-3 rounded shadow-lg text-white w-[20%] inner-shadow"
            onClick={() => deleteTask(editTasksValue?.id as number)}
          >
            Delete
          </button>
          <button
            className="bg-[#3556AB] border-2 border-[#0D2972] px-5 py-3 rounded shadow-lg text-white w-[80%] inner-shadow "
            onClick={() => {
              if (option === "new task") {
                addNewTask(taskName);
              } else {
                editTask({
                  id: editTasksValue?.id,
                  name: taskName,
                  checked: false,
                });
              }
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
