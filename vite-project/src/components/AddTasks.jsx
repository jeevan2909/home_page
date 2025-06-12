import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { useNavigate } from "react-router";

export default function AddTasks() {
  const { tasks, setTasks } = useContext(TaskContext);

  const navigate=useNavigate()

  return (
    <div className="flex justify-center items-center h-full w-full ">
      <form
        className="flex flex-col justify-center gap-2 border-1 border-black p-4"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          const task = data.get("task");
          const desc = data.get("desc");
          const priority = data.get("priority");
          const status = data.get("status");
          console.log(task, desc, priority, status);

          setTasks((prev) => {

              return [
                ...prev,
                {
                  id: prev.length + 1,
                  title: task,
                  description: desc,
                  status,
                  priority,
                },
              ];
            });

          navigate("/tasks")
        }}
      >
        <label htmlFor="task">Task</label>
        <input type="text" id="task" name="task" className="border-1" />
        <label htmlFor="desc" id="desc">
          Description
        </label>
        <textarea name="desc" id="desc" className="border-1"></textarea>

        <label>Priority</label>
        <select name="priority" id="priority" className="border-1">
          <option value={"low"}>Low</option>
          <option value={"medium"}>Medium</option>
          <option value={"high"}>High</option>
        </select>

        <label>Status</label>
        <select name="status" id="status" className="border-1">
          <option value={"pending"}>Pending</option>
          <option value={"completed"}>Completed</option>
        </select>
        <button type="submit" className="bg-blue-700 text-white" onClick={()=>{
          
        }}>
          Add Task
        </button>
      </form>
    </div>
  );
}
