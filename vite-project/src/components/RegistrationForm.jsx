import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    terms: false,
    bio: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (data.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters.';
    if (!data.email.includes('@')) newErrors.email = 'Email must contain "@" symbol.';
    if (data.age < 13 || data.age > 100) newErrors.age = 'Age must be between 13 and 100.';
    if (!data.terms) newErrors.terms = 'You must agree to the terms.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    const updatedData = {
      ...formData,
      [name]: fieldValue
    };

    setFormData(updatedData);
    setErrors(validate(updatedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSuccessMessage('Registration successful!');
    setFormData({
      name: '',
      email: '',
      age: '',
      gender: '',
      terms: false,
      bio: ''
    });
    setErrors({});
  };

  const isValidForm = Object.keys(validate(formData)).length === 0;

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Age:</label><br />
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        </div>

        <div>
          <label>Gender:</label><br />
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
            I agree to the terms and conditions
          </label>
          {errors.terms && <p style={{ color: 'red' }}>{errors.terms}</p>}
        </div>

        <div>
          <label>Bio:</label><br />
          <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
        </div>

        <button type="submit" disabled={!isValidForm}>Register</button>
      </form>

      {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
    </div>
  );
}

export default RegistrationForm;
