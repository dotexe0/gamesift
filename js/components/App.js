import React from 'react';
import SearchBar from './SearchBar';
import {browserHistory} from 'react-router';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

_backspace() {

}
  render() {
    const title = 'Gamesift';
    return (
      <div>
        <h1 className="webTitle">
          <a href="/">{title}</a>
        </h1>
        <SearchBar />
        <div>
          <h1 className="about">Gamesift.</h1> <h1 className="about-text">A game synopsis search engine.</h1>
          {this.props.children}
        </div>
      </div>
    );
  };
};
