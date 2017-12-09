import axios from 'axios'

const GET_CAMPUSES = "GET_STUDENTS"


//action creators
export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}


// // thunks

export const fetchCampuses = () => {
  return dispatch => {
    axios.get('/api/campuses')
      .then(res => res.data)
    .then(campusess => dispatch(getCampuses(campuses)))
  }
}

//reducer

export default function campusReducer(state = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses

    default:
      return state
  }
}
