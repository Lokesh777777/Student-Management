import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    department: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await StudentService.createStudent(student);
      navigate('/'); // Redirect to list after success
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Failed to add student');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={student.name}
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={student.email}
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Department: </label>
          <input 
            type="text" 
            name="department" 
            value={student.department}
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;