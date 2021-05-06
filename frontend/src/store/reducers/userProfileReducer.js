/* eslint-disable import/no-anonymous-default-export */
import {
  GET_USER_DETAILS,
  UPDATE_USER_DETAILS,
  UPDATE_PROFILEPIC,
  VIEW_RECO,
  VIEW_ITIN,
} from '../actions/types';

const initialState = {
  user: {},
  itin: {},
  status: '',
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_USER_DETAILS:
      return { ...state, user: action.payload };
    case UPDATE_USER_DETAILS:
      return { ...state, status: action.payload };
    case UPDATE_PROFILEPIC:
      return { ...state, status: action.payload };
    case VIEW_RECO:
      return { ...state, user: action.payload };
    case VIEW_ITIN:
      return { ...state, itin: action.payload };
    default:
      return state;
  }
};
