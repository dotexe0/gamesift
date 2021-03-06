import React from 'react';

import GameCard from './GameCard';

export default class GameCardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <GameCard img={this.props.img} id={this.props.id} title={this.props.title} videoId={this.props.videoId} summary={this.props.summary} />
    );
  }
}
