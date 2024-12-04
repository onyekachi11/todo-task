interface Task {
  task: {
    id: number;
    name: string;
  }[];
  get_Task_details: (value: number) => void;
}
const Tasks = ({ task, get_Task_details }: Task) => {
  return (
    <div>
      {task.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-white border rounded-sm m-4 shadow-md text-[#071D55]"
        >
          <div className="flex gap-4 justify-between items-cente">
            <input type="radio" name="" id="" className="w-[30px]" />
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
