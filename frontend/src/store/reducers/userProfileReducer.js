import {
    GET_USER_DETAILS,
    UPDATE_USER_DETAILS
} from '../actions/types'

const initialState = {
    user: {},
    status: ""
  };

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_USER_DETAILS:
            return { ...state, user: action.payload};
        case UPDATE_USER_DETAILS:
                return {...state, status: action.payload};
        default:
            return state;
    }
  }