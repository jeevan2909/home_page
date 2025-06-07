import React from 'react';
import StudentCard from './components/StudentCard';

function App() {
  const student = {
    name: 'Jeevan',
    age: 19,
    course: 'Computer Science',
    grade: 'A',
    profilePic: '/jeevan.jpg', 
  };

  return (
    <div>
      <h1>Student Info</h1>
      <StudentCard {...student} />
    </div>
  );
}

export default App;
