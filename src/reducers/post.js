import { GET_POST, POST_ERROR } from '../actions/types';
const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (action) {
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
  }
}
