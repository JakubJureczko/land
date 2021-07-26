export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_POST = "ADD_POST";
// export const GET_ALBUMS = "GET_ALBUMS";

export const getPosts = (id) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: GET_POSTS, payload: data });
    });
};
export const getPost = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: GET_POST, payload: data });
    });
};

export const getComments = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: GET_COMMENTS, payload: data });
    });
};

// export const getAlbums = (id) => (dispatch) => {
//   fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       return dispatch({ type: GET_ALBUMS, payload: data });
//     });
// };
