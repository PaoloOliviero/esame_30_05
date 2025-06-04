export const GET_SONGS = "GET_SONGS";
export const SELECT_SONG = "SELECT_SONG";
export const LIKE = "LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const getSongsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
      } else {
        console.error("Errore nel recupero delle canzoni");
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const selectSong = (song) => ({
  type: SELECT_SONG,
  payload: song,
});

export const likeAction = (song) => ({
  type: LIKE,
  payload: song,
});

export const removeLikeAction = (song) => ({
  type: REMOVE_LIKE,
  payload: song,
});
