import axios from 'axios';
axios.defaults.headers.common['X-Mashape-Key'] = 'JX0iguNUhfmsh56hr9JJEnbaKl7lp1PEXWZjsnHgdC9cdmNOB2';
const url = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&limit=25&search=";


export const SEARCH_GAME = 'SEARCH_GAME';
export const searchGame = query => async dispatch => {
  dispatch({ type: SEARCH_GAME })
  try {
    const res = await axios.get(`${url}${query}`)
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
