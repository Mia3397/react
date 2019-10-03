import * as action from '../../redux/users/actions';
import api from "../../methods/api";

export const getData = (params) => async (dispatch) => {
    const {data} = await api.getUsers(params);
    dispatch(action.updateUsersData(data))
};