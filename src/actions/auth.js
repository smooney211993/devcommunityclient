import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from './types';
import { setAlert } from './alert';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
// load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken();
  }
};

// register the user to the database and recieve the new user webtoken
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({
    name,
    email,
    password,
  });
  try {
    const { data } = await axios.post(
      'http://localhost:3001/api/users',
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
    // send the json webtoken via the payload
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
