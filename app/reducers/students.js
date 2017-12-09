import axios from 'axios'

const GET_STUDENTS = "GET_STUDENTS"


//action creators
export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
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
