import Check from "../assets/check.svg";

interface Task {
  id: number;
  name: string;
  checked: boolean;
}

interface TaskValues {
  task: Task[];
  get_Task_details: (value: number) => void;
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
}
const Tasks = ({ task, get_Task_details, setTask }: TaskValues) => {
  const toggleChecked = (id: number) => {
    setTask((prevItems: Task[]) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      {task.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-white border rounded-sm m-4 shadow-md text-[#071D55]"
        >
          <div className="flex gap-4 justify-between items-cente">
            {item.checked ? (
              <div
                className="border border-[#49C25D] h-[30px] w-[30px] rounded-full bg-[#53DA69] flex justify-center items-center  "
                onClick={() => toggleChecked(item.id)}
              >
                <img src={Check} alt="" />
              </div>
            ) : (
              <div
                className="border border-black h-[30px] w-[30px] rounded-full"
                onClick={() => toggleChecked(item.id)}
              ></div>
            )}

            <p>{item.name}</p>
          </div>
          <button
            className="border border-[#071D55] p-2 rounded"
            onClick={() => get_Task_details(item.id)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
