import React from 'react';
import SearchBar from './SearchBar';
import { browserHistory } from 'react-router';

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
          {this.props.children}
        </div>
      </div>
    );
  };
};
