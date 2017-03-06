import React from 'react';
import axios from 'axios';
import GameCardContainer from './GameCardContainer';

export default class SearchBar extends React.Component {
  state = {
    term: '',
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
    let url = `https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover%2Cvideos&width=500&height=500&limit=25&order=release_dates.date%3Adesc&search=${this.state.term}`;

    axios.defaults.headers.common['X-Mashape-Key'] = 'JX0iguNUhfmsh56hr9JJEnbaKl7lp1PEXWZjsnHgdC9cdmNOB2';
    this.setState({ loading: true});

    try {
      const { data } = await axios.get(url)
      this.setState({games: data, loading: false})
      console.log(this.state.games);

    } catch (e) {
      console.log(e);
    }


    // axios.get(url)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({games: res.data})
    //   })
    //   .catch( e => console.log(e));


    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'X-Mashape-Key': 'JX0iguNUhfmsh56hr9JJEnbaKl7lp1PEXWZjsnHgdC9cdmNOB2',
    //     "Content-Type": 'application/json'
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //   }).catch(err => {
    //     console.log("error: ", err);
    //   })
  }


  _onChangeTerm = e => this.setState({ term: e.target.value })

  render() {
      return (
          <div>
            <form onSubmit={this.onSearchAPI}>
              <input type="text"  value={this.state.term} onChange={this._onChangeTerm} />
              <button type="button" onClick={this.onSearchAPI}>
                  Search
              </button>
            </form>
            <isLoading />
          </div>
      )
  }
}
// const imageUrl = `http://images.igdb.com/igdb/image/upload/w_500/${cloudinary_id}.png`
//images.igdb.com/igdb/image/upload/t_thumb/tocoysjnay4he4zjdlwo.png

// games.map(({cover, name}, index) => (
//   <li>
//
//   </li>
// ))
