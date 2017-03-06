import React from 'react';

import GAMES from '../gamesDummyData';
import GameCard from './GameCard';

export default class GameCardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("GameCardContainer", this.props);
    const game = GAMES[this.props.id];
    return (
      <GameCard img={game.img} id={game.id} title={game.title} videoId={game.videoId} />
    );
  }
}
