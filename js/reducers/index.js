import { SEARCH_GAME } from '../actions';

const initialState = {
  query: '',
  loading: false,
  games: []
}

export default (state=initialState, action) => {
  switch(action.type) {
    case SEARCH_GAME:

      let newState = state;
      newState.loading = false;
      newState.games = state.games; // need to set this to games array from api call
      console.log(newState);
      return Object.assign({}, state, newState);

    default:
      return state;
  }

}
