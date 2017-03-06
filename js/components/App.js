import React from 'react';
import SearchBar from './SearchBar';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Games Appsss
        </h1>
        <SearchBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  };
};
