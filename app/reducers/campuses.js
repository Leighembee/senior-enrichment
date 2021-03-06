import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const CHANGE_STUDENT = 'CHANGE_STUDENT'
const DELETE_CAMPUS = 'DELETE_CAMPUS'


//action creators
export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}

function createCampus(campus) {
  return {
    type: CREATE_CAMPUS,
    campus: campus
  }
}

function updateCampus(campus) {
  return {
    type: UPDATE_CAMPUS,
    campus: campus
  }
}

function changeStudent(student) {
  return {
    type: CHANGE_STUDENT,
    student: student
  }
}

function deleteCampus(campus) {
  return {
    type: DELETE_CAMPUS,
    campus: campus
  }
}



// thunks

export const fetchCampuses = () => {
  return dispatch => {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => dispatch(getCampuses(campuses)))
      .catch(err => console.error(err))   // add error messages later
  }
}


export const createNewCampus = campus => {
  return dispatch => {
    axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(data => dispatch(createCampus(data)))
      .catch(err => console.error(err))
  }
}




export const updateExistingCampus = (campus) => {
  return function thunk(dispatch) {
    axios.put(`/api/campuses/${campus.id}`, campus)
      .then(res => {
        return res.data
      })
      .then(() => {
        dispatch(fetchCampuses())
      })
      .catch(err => console.log(err))
  }
}


export const deleteExistingCampus = (campus, history) => {
  return function thunk(dispatch) {
    axios.delete(`/api/campuses/${campus.id}`)
      .then(() => {
        return dispatch(deleteCampus(campus))
      })
      .catch(err => console.error(err))
  }
}

//reducer

export default function campusesReducer(campuses = [], action) {

  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses

    case CREATE_CAMPUS:
      return [...campuses, action.campus]

    case UPDATE_CAMPUS:
      return campusesReducer.map(campus => (
        action.campus.id === campus.id ? Object.assign({}, campus, action.campus) : campus
      ))

    case DELETE_CAMPUS:
      return campuses.filter(campus =>
        campus.id !== action.campus.id
      )

    default:
      return campuses
  }
}
