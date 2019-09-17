import { TOGGLE_STATE } from './types';

const initialState = {
    isOpen: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_STATE:
            return { isOpen: !state.isOpen };
        default:
            return state
    }
}
