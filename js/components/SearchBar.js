import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import GameCardList from './GameCardList';

export class SearchBar extends React.Component {
  state = {
    query: '',
    loading: false,
    games: []
  }

  Loading = () => { return <h5>Loading...</h5> }

  NotLoading = () => { return;}

  isLoading = () => {
    const loading = this.state.loading;
    if (loading) {
      return <Loading />
    } else {
      return <NotLoading />
    }
  };

  onSearchAPI = async (event) => {
    event.preventDefault();
    axios.defaults.headers.common['X-Mashape-Key'] = 'JX0iguNUhfmsh56hr9JJEnbaKl7lp1PEXWZjsnHgdC9cdmNOB2';

    let url = `https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover%2Cvideos&width=320&height=568&limit=5&order=release_dates.date%3Adesc&search=${this.state.query}`;
    this.setState({ loading: true});

    try {
      const { data } = await axios.get(url)
      this.setState({games: data, loading: false})
      console.log("Games: ", this.state.games);
    } catch (e) {
      console.log(e);
    }
  }

  _onChangeTerm = e => this.setState({ query: e.target.value })

  render() {
      return (
          <div>
            <form onSubmit={this.onSearchAPI}>
              <input type="text"  value={this.state.query} onChange={this._onChangeTerm} />
              <button type="button" onClick={this.onSearchAPI}>
                  Search
              </button>
            </form>
            <isLoading />
          </div>
      )
  }
}

const mapStateToProps = (state, props) => ({
  games: state.games
});

export default connect(mapStateToProps)(SearchBar);
