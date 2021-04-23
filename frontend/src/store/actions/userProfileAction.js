import {
    GET_USER_DETAILS,
    UPDATE_USER_DETAILS,
    UPDATE_PROFILEPIC
  } from './types';
import connectionServer from '../../helpers/constants';
import axios from 'axios';

export const getUserDetails = () => (dispatch) => {
    axios.get(`${connectionServer}/users/getDetails/${localStorage.getItem('email')}`)
      .then(response =>
        dispatch({
            type: GET_USER_DETAILS,
            payload: response.data,
        }),
      )
      .catch((error) => {
        console.log(error);
      });
  };

  export const updateUserDetails = (userProfileData) => dispatch => {
    axios.post(`${connectionServer}/users/updateDetails/${localStorage.getItem('email')}`, userProfileData)
        .then(response => dispatch({
            type: UPDATE_USER_DETAILS,
            payload: response.data
        }))
        .catch(error => {
            if (error.response && error.response.data) {
                return dispatch({
                    type: UPDATE_USER_DETAILS,
                    payload: error.response.data
                });
            }
            return;
        });
}

export const updateProfilePic = (userProfileData) => dispatch => {
  axios.post(`${connectionServer}/users/image`, userProfileData)
      .then(response => dispatch({
          type: UPDATE_PROFILEPIC,
          payload: response.data
      }))
      .catch(error => {
          if (error.response && error.response.data) {
              return dispatch({
                  type: UPDATE_PROFILEPIC,
                  payload: error.response.data
              });
          }
          return;
      });
}
