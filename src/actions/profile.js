import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

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
