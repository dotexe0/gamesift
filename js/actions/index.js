import axios from 'axios';
const url = "https://api-endpoint.igdb.com/games/?fields=*&limit=25&search=";


export const SEARCH_GAME = 'SEARCH_GAME';
export const searchGame = query => async dispatch => {
  dispatch({ type: SEARCH_GAME })
  try {
    const res = await axios.get(`${url}${query}`, {
      headers: {
        "user-key": "25406f1447a623d9503a042963619ebd",
        Accept: "application/json"} })
    console.log(res);
    return dispatch(receivedGame(res.data));

  } catch (e) {
    console.log(e);
  }
}

export const RECEIVED_GAME = 'RECEIVED_GAME';
const receivedGame = games => ({
  type: RECEIVED_GAME,
  games
});

export const SHOW_DETAIL = 'SHOW_DETAIL';
export const showDetail = gameId => ({
  type: SHOW_DETAIL,
  gameId
})
