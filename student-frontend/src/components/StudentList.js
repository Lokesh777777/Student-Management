import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    StudentService.getAllStudents()
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error:', error));
  };

  const deleteStudent = (id) => {
    StudentService.deleteStudent(id)
      .then(() => fetchStudents())
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Students List</h2>
      <Link to="/add">Add Student</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>
                <Link to={`/edit/${student.id}`}>Edit</Link>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;