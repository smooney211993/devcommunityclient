import axios from 'axios';
import { setAlert } from './alert';
import { history } from 'react-router-dom';
import { GET_PROFILE, PROFILE_ERROR } from './types';
// get current user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/api/profile/me`);

    dispatch({
      type: GET_PROFILE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
export const createProfile = (formState, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: { 'Content-type': 'application/json' },
    };
    const { data } = await axios.post(
      `http://localhost:3001/api/profile/`,
      formState,
      config
    );
    dispatch({
      type: GET_PROFILE,
      payload: data,
    });
    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created'));
    if (!edit) {
      history.push('/dashboard');
    }
    // alerts the user that profile is created and redirects them to dashboard
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
