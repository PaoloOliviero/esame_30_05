import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songReducer from "../reducers/songReducer";
import likeReducer from "../reducers/likeReducer";

const bigReducer = combineReducers({
  song: songReducer,
  likes: likeReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
