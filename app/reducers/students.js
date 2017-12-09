import axios from 'axios'

const GET_STUDENTS = "GET_STUDENTS"
const CREATE_STUDENT = 'CREATE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const CHANGE_CAMPUS = 'UPDATE_CAMPUS'
const DELETE_STUDENT = "DELETE_STUDENT"


//action creators
export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  }
}

function createStudent(student) {
  return {
    type: CREATE_STUDENT,
    student: student
  }
}

function updateStudent(student) {
  return {
    type: UPDATE_STUDENT,
    student: student
  }
}

function changeCampus(student) {
  return {
    type: CHANGE_CAMPUS,
    student: student
  }
}

function deleteStudent() {
  return {
    type: CHANGE_CAMPUS,
    student: student
  }
}
// // thunks


export const fetchStudents = () => {
  return dispatch => {
    axios.get('/api/students')
      .then(res => res.data)
    .then(students => dispatch(getStudents(students)))
  }
}

//reducer

export default function studentsReducer(state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students

    default:
      return state
  }
}
