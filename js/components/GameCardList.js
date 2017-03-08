import React from 'react';
import GameCardContainer from './GameCardContainer';
import { connect } from 'react-redux';

class GameCardList extends React.Component {

  render() {
    //props here contains Location, params, route, router, routeParams. Need to pass state.
    // console.log("GameCardList props, ", this.props);

    const games = this.props.games.map((game, index) => {
      // console.log("img: ", game.cover.cloudinary_id);
      const imageUrl = `http://images.igdb.com/igdb/image/upload/w_320/${game.cover.cloudinary_id}.png` || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
      const video = game.videos[0].video_id ? game.videos[0].video_id : 'dQw4w9WgXcQ';

      // console.log("videos?: ", video);
      return (
          <li key={index}>
             <GameCardContainer img={imageUrl} id={game.id} title={game.name}
                      videoId={video} />
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

const mapStateToProps = state => ({
  games: state.games
})

export default connect(mapStateToProps)(GameCardList);
