import * as action from '../../redux/login/actions';

export const signIn = (name) => (dispatch) => {
    dispatch(action.signIn(name))
};