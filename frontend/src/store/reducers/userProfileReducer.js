import {
    GET_USER_DETAILS,
    UPDATE_USER_DETAILS,
    UPDATE_PROFILEPIC,
    VIEW_RECO
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
        case UPDATE_PROFILEPIC:
            return {...state, status: action.payload};
        case VIEW_RECO:
            return{...state, user: action.payload};
        default:
            return state;
    }
  }