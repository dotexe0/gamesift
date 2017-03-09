import { SEARCH_GAME, RECEIVED_GAME, SHOW_DETAIL } from '../actions';

const initialState = {
  loading: false,
  games: []
}

export default (state=initialState, action) => {
  switch(action.type) {
    case SEARCH_GAME:

    return {
      ...state,
      loading: true
    }

    case RECEIVED_GAME:

    return {
      games: action.games,
      loading: false
    }

    case SHOW_DETAIL:

      return {
        ...state,
        game: state.games.filter(i => i.id.toString() === action.gameId)[0]
      }

    default:
      return state;
  }

}
