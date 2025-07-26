import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    email: '',
    department: ''
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student:', error);
        alert('Failed to load student data');
      }
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await StudentService.updateStudent(id, student);
      navigate('/');
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student');
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={student.department}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;