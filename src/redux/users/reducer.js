import { UPDATE_USERS } from './types';

const initialState = {
    users: []
};

const handleReducer = {
    [UPDATE_USERS]: (state, {payload}) => ({
            ...state,
            users: [...payload]
        })
};

const usersReducer = (state = initialState, action) => {
    const handler = handleReducer[action.type];
    return handler ? handler(state, action) : state;
};

export default usersReducer;