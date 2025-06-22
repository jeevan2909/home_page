import { useState } from "react";

import "./App.css";
import { AppRoutes } from "./routes/Routes";
import { TaskProvider } from "./contexts/TaskContext";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="h-screen  ">
      <AuthProvider>
      <TaskProvider>
      <AppRoutes />
      </TaskProvider>
      </AuthProvider>
    
    </div>
  );
}

export default App;
