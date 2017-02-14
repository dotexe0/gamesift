import React from 'react';
import GameCardContainer from './GameCardContainer';
import GAMES from '../gamesDummyData';

export default class GameCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: GAMES
    }
  }
  render() {

    console.log("GameCardList props, ", this.state);
    const games = Object.keys(GAMES).map((gameId, index) => {
        const game = this.state.games[gameId];
        return (
            <li key={index}>
               <GameCardContainer id={game.id} title={game.title}
                        videoId={game.videoId} />
            </li>
        );
    });

    return (
        <ul>
            {games}
        </ul>
    );
  }

};
