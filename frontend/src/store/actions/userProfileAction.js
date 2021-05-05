import { GET_USER_DETAILS, UPDATE_USER_DETAILS, VIEW_RECO } from './types';
import { BACKEND_URL } from '../../helpers/constants';
import axios from 'axios';

export const getUserDetails = () => (dispatch) => {
  axios
    .get(`${BACKEND_URL}/users/getDetails/${localStorage.getItem('email')}`)
    .then((response) =>
      dispatch({
        type: GET_USER_DETAILS,
        payload: response.data,
      }),
    )
    .catch((error) => {
      console.log(error);
    });
};

export const updateUserDetails = (userProfileData) => (dispatch) => {
  axios
    .post(
      `${BACKEND_URL}/users/updateDetails/${localStorage.getItem('email')}`,
      userProfileData,
    )
    .then((response) =>
      dispatch({
        type: UPDATE_USER_DETAILS,
        payload: response.data,
      }),
    )
    .catch((error) => {
      if (error.response && error.response.data) {
        return dispatch({
          type: UPDATE_USER_DETAILS,
          payload: error.response.data,
        });
      }
      return;
    });
};

export const viewRecommendation = (userInputData) => (dispatch) => {
  axios
    .post(
      `${BACKEND_URL}/recommendations/view`,
      userInputData,
    )
    .then((response) =>
      dispatch({
        type: VIEW_RECO,
        payload: response.data,
      }),
    )
    .catch((error) => {
      if (error.response && error.response.data) {
        return dispatch({
          type: VIEW_RECO,
          payload: error.response.data,
        });
      }
      return;
    });
};
