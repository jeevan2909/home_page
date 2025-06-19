import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskComponent from "./TaskComponent";
import { useNavigate } from "react-router";
import Button from "./Button";
import useFilter from "../hooks/useFilter";
import { getTasks, updateTask } from "../service/tasksService";

export default function Tasks() {
  const { tasks, setTasks } = useContext(TaskContext);
  const {filterStatus,filteredTasks,setFilterStatus}=useFilter({tasks})
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)

const getData=async()=>{
  try{
    setLoading(true)
    const data=await getTasks()
    console.log(data,"data")

    setTasks(data)
    setLoading(false)
    return data
  }catch(error){
    console.log(error)
  }
}
  useEffect(()=>{


   getData()
  },[])
  return (
    <div className="p-2">
      <div className="flex  justify-between mb-4  ">
        <div className="flex items-center gap-2">
          <div
            className="text-[32px]"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            &lsaquo;{" "}
          </div>
          <strong className="text-[20px]"> Task List</strong>
        </div>

        <button
          className="border-2 border-black p-2 bg-black text-[white] rounded-4xl cursor-pointer"
          onClick={() => {
            navigate("/add-task");
          }}
        >
          Add tasks
        </button>
      </div>
      
      <div className="flex justify-around mb-4">
        <Button
          buttonText="All"
          selected={filterStatus === "all"}
          onClick={() => {
            setFilterStatus("all");
          }}
        />
        <Button
          buttonText="Completed"
          selected={filterStatus === "completed"}
          onClick={() => {
            setFilterStatus("completed");
          }}
        />
        <Button
          buttonText="Pending"
          selected={filterStatus === "pending"}
          onClick={() => {
            setFilterStatus("pending");
          }}
        />
      </div>
{loading&&<div className="flex justify-center items-center h-full w-full ">
  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-700"></div>
</div>}
      {!loading && filteredTasks?.map((task, index) => {
  return (
    <TaskComponent
      key={task.id} // 👈 ADD THIS LINE
      onClick={() => {
        navigate(`/task/${index}`);
      }}
      task={task}
      onChange={(e) => {
        console.log(task, "event");
        updateTask(task.id, { status: e ? "completed" : "pending" });
        getData();
              
              // setTasks((prev) => {
              //   prev[index] = {
              //     ...prev[index],
              //     status: e ? "completed" : "pending",
              //   };

              //   return [...prev];
              // });
            }}
          />
        );
      })}
    </div>  
  );
}