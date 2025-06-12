import { useState } from "react";

import "./App.css";
import { AppRoutes } from "./routes/Routes";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
  return (
    <div className="h-screen  ">
      <TaskProvider>
      <AppRoutes />
      </TaskProvider>
    
    </div>
  );
}

export default App;
