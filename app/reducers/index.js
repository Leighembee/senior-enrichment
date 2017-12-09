/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students  from './students'

const initialState = {}

const rootReducer = combineReducers({
  students : students
})


export default rootReducer



