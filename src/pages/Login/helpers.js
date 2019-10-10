import * as action from '../../redux/login/actions';

export const signIn = (name, email, password) => (dispatch) => {
    localStorage.setItem('user', JSON.stringify({
        name,
        email,
        password
    }));
    dispatch(action.signIn(name))
};