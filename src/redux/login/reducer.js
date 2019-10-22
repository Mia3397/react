import { SIGN_IN, LOGOUT } from './types';
import F from '../../utils/func';

const localUser = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
  userName: localUser ? localUser.name : ''
};

const handleReducer = {
  [SIGN_IN]: (state, { payload }) => ({
    ...state,
    userName: payload
  }),
  [LOGOUT]: (state) => ({
    ...state
  })
};

export default F.createReducer(handleReducer, initialState);
