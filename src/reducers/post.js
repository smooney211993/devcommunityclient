import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from '../actions/types';
const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === payload.id) {
            return { ...post, likes: payload.likes };
          }
          return post;
        }),
        // map through the posts, for each post check to see if it matches the payload and then manipulate that posts likes
      };
    default:
      return state;
  }
}
