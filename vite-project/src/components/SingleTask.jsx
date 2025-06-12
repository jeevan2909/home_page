import React, { use, useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { useNavigate, useParams } from "react-router";

export function SingleTask() {
  const { tasks, setTasks } = useContext(TaskContext);

  const [task, setTask] = useState  ({
    title: "",
    description: "",
    priority: "",
    status: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(tasks[id], "id");

  useEffect(() => {
    setTask(tasks[id]);
  }, []);

  if (!task) {
    return <div>Loading...</div>;
  }
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
            
            prev[id]={
             
              title: task,
              description: desc,
              status, 
              priority,
            }

            return [...prev]
          });

          navigate("/tasks");
        }}
      >
        <label htmlFor="task">Task</label>
        <input
          value={task.title}
          type="text"
          id="task"
          name="task"
          className="border-1"
          onChange={(e)=>{
            setTask({...task,title:e.target.value})
          }}
        />
        <label htmlFor="desc" id="desc">
          Description
        </label>
        <textarea
          value={task.description}
          name="desc"
          id="desc"
          className="border-1"
          onChange={(e)=>{
            setTask({...task,description:e.target.value})
          }}
        ></textarea>

        <label>Priority</label>
        <select
          value={task.priority}
          name="priority"
          id="priority"
          className="border-1"
          onChange={(e)=>{
            setTask({...task,priority:e.target.value})
          }}
        >
          <option value={"low"}>Low</option>
          <option value={"medium"}>Medium</option>
          <option value={"high"}>High</option>
        </select>

        <label>Status</label>
        <select
          value={task.status}
          name="status"
          id="status"
          className="border-1"
          onChange={(e)=>{
            setTask({...task,status:e.target.value})
          }}
        >
          <option value={"pending"}>Pending</option>
          <option value={"completed"}>Completed</option>
        </select>
        <button
          type="submit"
          className="bg-black text-white"
          onClick={() => {}}
        >
          Edit Task
        </button>
      </form>
    </div>
  );
}
