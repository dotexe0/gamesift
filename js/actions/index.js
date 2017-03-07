import axios from 'axios';
axios.defaults.headers.common['X-Mashape-Key'] = 'JX0iguNUhfmsh56hr9JJEnbaKl7lp1PEXWZjsnHgdC9cdmNOB2';
const url = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover%2Cvideos&width=320&height=568&limit=5&order=release_dates.date%3Adesc&search=";


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
