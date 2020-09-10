import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR } from './types';

// get post from database
export const getPost = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:3001/api/post');
    dispatch({
      type: GET_POSTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, err: err.response.status },
    });
  }
};
