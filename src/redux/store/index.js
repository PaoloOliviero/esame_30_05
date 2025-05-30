import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers";

const rootReducer = combineReducers({
  fetchMusic: fetchedMusicReducer,
  selectMusic: selectedMusicReducer,
});

const store = configureStore({
  reducer: {
    music: musicReducer,
    favourites: favourites,
    search: searchReducer,
  },
});

export default store;
