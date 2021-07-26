export const ADD_FAVOURITE = "ADD_FAVOURRITE";
export const DELETE_FAVOURITE = "DELETE_FAVOURRITE";

export const addFavourite = (id) => ({
  type: ADD_FAVOURITE,
  payload: id,
});

export const deleteFavourite = (id) => ({
  type: DELETE_FAVOURITE,
  payload: {
    id,
  },
});
