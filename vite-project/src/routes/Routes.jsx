import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Tasks from '../components/Tasks';
import AddTasks from '../components/AddTasks';
import {SingleTask} from "../components/SingleTask"


export function AppRoutes() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/add-task" element={<AddTasks/>}/>
         <Route path="/task/:id" element={<SingleTask/>}/>

      </Routes>
    </BrowserRouter>
  );
}
