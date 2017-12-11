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

function deleteStudent(student) {
  return {
    type: DELETE_STUDENT,
    student: student
  }
}



// thunks

export const fetchStudents = () => {
  return dispatch => {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => dispatch(getStudents(students)))
      .catch(err => console.error(err))   // add error messages later
  }
}

export const createNewStudent = student => {
  return dispatch => {
    axios.post('/api/students', student)
      .then(res => res.data)
      .then(data => dispatch(createStudent(data)))
      .catch(err => console.error(err))
  }
}

export const updateExistingStudent = (student) => {
    return function thunk(dispatch) {
    axios.put(`/api/students/${student.id}`, student)
      .then(res => {
        return res.data
      })
      .then(() => {
        dispatch(fetchStudents())
      })
      .catch(err => console.log(err))
  }
}


export const deleteExistingStudent = (student, history) => {
  return function thunk(dispatch) {
    axios.delete(`/api/students/${student.id}`)
      .then(() => {
        return dispatch(deleteStudent(student))
      })
      .catch(err => console.error(err))
  }
}


//reducer

export default function studentsReducer(students = [], action) {

  switch (action.type) {
    case GET_STUDENTS:
      return action.students

    case CREATE_STUDENT:
      return [...students, action.student]

    case UPDATE_STUDENT:
      return studentsReducer.map(student => (
        action.student.id === student.id ? Object.assign({}, student, action.student) : student
      ))

    case DELETE_STUDENT:
      return students.filter(student =>
        student.id !== action.student.id
      )

    default:
      return students
  }
}
