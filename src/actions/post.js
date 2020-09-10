import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from './types';

// get post from database
export const getPosts = () => async (dispatch) => {
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

export const addLike = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `http://localhost:3001/api/post/like/${postId}`
    );
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, err: err.response.status },
    });
  }
};
