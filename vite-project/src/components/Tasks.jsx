import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskComponent from "./TaskComponent";
import { useNavigate } from "react-router";
import Button from "./Button";
import useFilter from "../hooks/useFilter";

export default function Tasks() {
  const { tasks, setTasks } = useContext(TaskContext);
  const {filterStatus,filteredTasks,setFilterStatus}=useFilter({tasks})
  const navigate = useNavigate();
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
      {filteredTasks?.map((task, index) => {
        return (
          <TaskComponent
            onClick={() => {
              navigate(`/task/${index}`);
            }}
            task={task}
            onChange={(e) => {
              console.log(e, "evnet");
              setTasks((prev) => {
                prev[index] = {
                  ...prev[index],
                  status: e ? "completed" : "pending",
                };

                return [...prev];
              });
            }}
          />
        );
      })}
    </div>
  );
}
