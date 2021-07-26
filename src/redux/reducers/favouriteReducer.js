import { ADD_FAVOURITE, DELETE_FAVOURITE } from "../actions/favouriteActions";

const initialState = {
  favourites: [],
};

export function favouriteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return { ...state, favourites: [...state.favourites, action.payload] };
    case DELETE_FAVOURITE:
      return state.filter((fav) => fav.id !== action.payload.id);
    default:
      return state;
  }
}
