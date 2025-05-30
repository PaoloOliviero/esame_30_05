import { GET_MUSIC } from "./action";

const initialState = {
  results: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
