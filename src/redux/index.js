import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import sidebarReducer from './sidebar/reducer';
import notesReducer from './notes/reducer';
import musicReducer from './music/reducer';
import analyticsReducer from './analytics/reducer';
import loginReducer from './login/reducer';

export default combineReducers({
  sidebarReducer,
  notesReducer,
  musicReducer,
  analyticsReducer,
  loginReducer,
  form: reduxFormReducer
});
