import { toggleStateSideBar } from '../../redux/sidebar/actions';

export const toggleState = (data) => (dispatch) => {
    console.log(dispatch)
    dispatch(toggleStateSideBar)
};