import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
} from './types';

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
// add likes to post
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
// unlike post
export const unLike = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `http://localhost:3001/api/post/unlike/${postId}`
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

// delete post
export const deletePost = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:3001/api/post/${postId}`
    );
    dispatch({
      type: DELETE_POST,
      payload: postId,
    });
    dispatch(setAlert(data.msg, 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, err: error.response.status },
    });
  }
};

export const addPost = (formState) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const { data } = await axios.post(
      `http://localhost:3001/api/post`,
      formState,
      config
    );
    dispatch({
      type: ADD_POST,
      payload: data,
    });
    dispatch(setAlert('Post Created', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.status, err: error.response.status },
    });
  }
};
// get post
export const getPostById = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/api/post/${postId}`
    );
    dispatch({
      type: GET_POST,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.status, err: err.response.status },
    });
  }
};
