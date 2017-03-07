import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { searchGame } from '../actions';

class SearchBar extends React.Component {
  state = {
    query: ''
  }

  // not working right now
  Loading = () => { return <h5>Loading...</h5> }
  NotLoading = () => { return; }
  isLoading = () => {
    const loading = this.props.loading;
    if (loading) {
      return <Loading />
    } else {
      return <NotLoading />
    }
  };

  onSearchAPI = async (event) => {
    event.preventDefault();
    this.props.searchGame(this.state.query)
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

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps, { searchGame })(SearchBar);
