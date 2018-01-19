//to combine all reducers and return them
import { combineReducers } from 'redux'
import { user } from './redux/user.redux'

export default combineReducers({user})