import React from 'react';
import GameCardContainer from './GameCardContainer';
import { connect } from 'react-redux';
import GAMES from '../gamesDummyData';

export class GameCardList extends React.Component {
  constructor(props) {
    super(props);
    //props here contains Location, params, route, router, routeParams. Need to pass state.
    console.log("GameCardList props, ", this.props);
    this.state = {
      games: GAMES
    }
  }

  render() {

    const games = GAMES.map((gameId, index) => {
        const game = this.state.games[index];

        // a single game object
        // console.log("game: ", game);

        const imageUrl = `http://images.igdb.com/igdb/image/upload/w_320/${game.cover.cloudinary_id}.png`
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

const mapStateToProps = (state, props) => {
  games: state.games
}

export default connect(mapStateToProps)(GameCardList);
