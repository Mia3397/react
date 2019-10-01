import * as action from '../../redux/music/actions';
import api from "../../methods/api";

export const getMusic = (params) => async (dispatch) => {
    const {data: {results}} = await api.getMusic(params);
    dispatch(action.getMusic(results));
};