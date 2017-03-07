import { SEARCH_GAME } from '../actions';

const initialState = {
  query: '',
  loading: false,
  games: []
}

export default (state=initialState, action) => {
  switch(action.type) {
    case SEARCH_GAME:
    this.setState({games: data, loading: false})
    console.log("new state: ", this.state.games);
      return console.log("Searching...");

    default:
      return state;
  }

}
