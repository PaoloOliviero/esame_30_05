import { GET_SONGS } from "../actions/songActions";

const initialState = {
  songs: [],
  currentSong: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case "SELECT_SONG":
      return { ...state, currentSong: action.payload };
    default:
      return state;
  }
};

export default songReducer;
