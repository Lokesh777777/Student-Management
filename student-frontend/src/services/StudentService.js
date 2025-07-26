import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

class StudentService {
  getAllStudents() {
    return axios.get(API_URL);
  }

  createStudent(student) {
    return axios.post(API_URL, student);
  }

  getStudentById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  updateStudent(id, student) {
    return axios.put(`${API_URL}/${id}`, student);
  }

  deleteStudent(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new StudentService();