export const SEARCH_GAME = 'SEARCH_GAME';
export const searchGame = (query, gamesArray) => ({
  type: SEARCH_GAME,
  query,
  gamesArray
});
