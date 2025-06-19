import { createContext, use, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {

  //   if(!localStorage.getItem("tasks")){
  //     localStorage.setItem("tasks", JSON.stringify([]))
  //   }
  //   if(tasks.length!==0){
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //   }
  // }, [tasks]);


  // useEffect(() => {
  //   const tasks = JSON.parse(localStorage.getItem("tasks"));
  //   setTasks(tasks);
  // }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

