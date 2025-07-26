import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;