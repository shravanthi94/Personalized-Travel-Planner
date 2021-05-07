import {
  GET_USER_DETAILS,
  UPDATE_USER_DETAILS,
  VIEW_RECO,
  VIEW_ITIN,
  VIEW_DAY_ITIN,
} from './types';
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
    .post(`${BACKEND_URL}/recommendations/view`, userInputData)
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

export const viewItinerary = (poi, days, tripType) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ poi, days, tripType });
  axios
    .post(`${BACKEND_URL}/itinerary`, body, config)
    .then((response) =>
      dispatch({
        type: VIEW_ITIN,
        payload: response.data,
      }),
    )
    .catch((error) => {
      if (error.response && error.response.data) {
        return dispatch({
          type: VIEW_ITIN,
          payload: error.response.data,
        });
      }
      return;
    });
};

export const viewDayItinerary = (data) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ data });
  axios
    .post(`${BACKEND_URL}/itinerary/view`, body, config)
    .then((response) =>
      dispatch({
        type: VIEW_DAY_ITIN,
        payload: response.data,
      }),
    )
    .catch((error) => {
      if (error.response && error.response.data) {
        return dispatch({
          type: VIEW_DAY_ITIN,
          payload: error.response.data,
        });
      }
      return;
    });
};
