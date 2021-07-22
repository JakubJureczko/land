import { GET_POSTS } from "../actions/postsActions";
import { GET_POST } from "../actions/postsActions";
import { GET_COMMENTS } from "../actions/postsActions";
// import { GET_ALBUMS } from "../actions/postsActions";

const initialState = {
  posts: [],
  // albums: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_POST:
      return { ...state, post: action.payload };
    case GET_COMMENTS:
      return { ...state, comments: action.payload };
    // case GET_ALBUMS:
    //   return { ...state, albums: action.payload };
    default:
      return state;
  }
};
