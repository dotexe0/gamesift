import { SEARCH_GAME, RECEIVED_GAME } from '../actions';

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
    
    default:
      return state;
  }

}
