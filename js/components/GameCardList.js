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
    const games = GAMES.map((gameId, index) => {
        const game = this.state.games[index];
        console.log("game: ", game);
        const imageUrl = `http://images.igdb.com/igdb/image/upload/w_500/${game.cover.cloudinary_id}.png`
        return (
            <li key={index}>
               <GameCardContainer img={imageUrl} id={game.id} title={game.name}
                        videoId={game.videos[0]} />
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
