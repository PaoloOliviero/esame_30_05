import { LIKE, REMOVE_LIKE } from "../actions/songActions";

const initialState = {
  likedSongs: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };

    case REMOVE_LIKE:
      return {
        ...state,
        likedSongs: state.likedSongs.filter((song) => song.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default likeReducer;
