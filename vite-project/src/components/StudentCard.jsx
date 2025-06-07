import React, { useState } from 'react';

const getGradeColor = (grade) => {
  switch (grade.toUpperCase()) {
    case 'A':
      return 'lightgreen';
    case 'B':
      return 'lightblue';
    case 'C':
      return 'orange';
    case 'D':
      return 'lightcoral';
    default:
      return 'gray';
  }
};

const StudentCard = ({ name, age, course, grade, profilePic }) => {
  const [favoriteSubject, setFavoriteSubject] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleSubjectChange = (e) => {
    setFavoriteSubject(e.target.value);
  };

  const gradeStyle = {
    backgroundColor: getGradeColor(grade),
    padding: '10px',
    borderRadius: '8px',
    color: '#333',
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', marginBottom: '20px' }}>
      <img
        src={profilePic}
        alt={`${name}'s profile`}
        width="100"
        height="100"
        style={{ borderRadius: '50%' }}
      />
      <h2>{name}</h2>
      <div style={gradeStyle}>
        <strong>Grade:</strong> {grade}
      </div>
      <button onClick={toggleDetails} style={{ marginTop: '10px' }}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '10px' }}>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Course:</strong> {course}</p>

          <label>
            Favorite Subject:
            <input
              type="text"
              value={favoriteSubject}
              onChange={handleSubjectChange}
              style={{ marginLeft: '10px' }}
            />
          </label>

          {favoriteSubject && (
            <p style={{ marginTop: '5px' }}>
              <strong>Favorite Subject:</strong> {favoriteSubject}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentCard;
