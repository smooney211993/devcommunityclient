import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from './types';
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
    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created', 'success'));
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

export const addExperience = (formState, history) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-type': 'application/json' },
    };
    const { data } = await axios.put(
      `http://localhost:3001/api/profile/experience`,
      formState,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: data,
    });
    dispatch(setAlert('Experience updated', 'success'));
    history.push('/dashboard');

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

export const addEducation = (formState, history) => async (dispatch) => {
  try {
    const config = {
      headers: { 'Content-type': 'application/json' },
    };
    const { data } = await axios.put(
      `http://localhost:3001/api/profile/education`,
      formState,
      config
    );
    dispatch({
      type: UPDATE_PROFILE,
      payload: data,
    });
    dispatch(setAlert('Education updated', 'success'));
    history.push('/dashboard');

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
