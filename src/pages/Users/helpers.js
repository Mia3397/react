import * as action from '../../redux/users/actions';
import api from "./api";

export const getData = (params) => async(dispatch) => {
    const data = await api.getNames(params);
    const arrayOfUsers = data.data;
    dispatch(action.updateUsersData(arrayOfUsers))
};