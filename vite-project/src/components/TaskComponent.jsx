import React from "react";

export default function TaskComponent({ task, onChange = () => {},onClick }) {
  return (
    <div onClick={onClick}>
      <div className="border-1 border-black rounded-2xl p-4 mb-4 flex justify-between">
        <div>
          <p>Task Name: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
        </div>

        <input
      checked={task.status === "completed"}
          type="checkbox"
          className="w-10 h-10"
          onClick={(e)=>{
            e.stopPropagation()
          }}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        ></input>
      </div>
    </div>
  );
}


const testCFunctiion =(e)=>{
console.log(e)

}


testCFunctiion("jpy")