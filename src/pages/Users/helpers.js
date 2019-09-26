import * as action from '../../redux/users/actions';
import getUsers from "../../methods/getUsers";

export const getData = (params) => async(dispatch) => {
    const {data} = await getUsers(params);
    dispatch(action.updateUsersData(data))
};