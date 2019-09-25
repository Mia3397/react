import { combineReducers } from 'redux';
import sidebar from './sidebar/reducer';
import notes from './notes/reducer';
import users from './users/reducer'

export default combineReducers({
    sidebar,
    notes,
    users
})