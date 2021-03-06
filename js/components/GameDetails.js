import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { showDetail, searchGame } from '../actions';
import Rating from './Rating';

class GameDetails extends React.Component {

componentDidMount() {
  this.props.showDetail(this.props.params.gameID);
}

  render() {
    if (!this.props.game) {
      return <h1>Loading...</h1>
    }

    const { name, cover, id, img, summary, videos, esrb, aggregated_rating } = this.props.game;
    const imageUrl = cover ? `http://images.igdb.com/igdb/image/upload/t_logo_med_2x/${cover.cloudinary_id}.png` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
    const video = videos ? videos[0].video_id : 'dQw4w9WgXcQ';
    const youtubeLink = `https://www.youtube.com/embed/${video}`;
    const summaryText = summary ? summary : 'N/A';
    const rating = aggregated_rating ? Math.round(aggregated_rating / 10) + '/10' : 'Not Rated';
    return (
        <div className="gameDetails">
          <button className="button" id="homeButton" onClick={() => browserHistory.push('/home')}>Home</button>
          <h1 className="detailGameTitle">{name}</h1>
            <Rating /><h5 className="rating"> [{rating}]</h5> <br />
            <img className="image"
                src={imageUrl}
                alt="error, no img found" /><br /><br />
              <div className="summaryText">
                <h3 className="summary">
                <strong style={{float:'left'}}>Synopsis:</strong><br />
                  {summaryText}
                </h3>
              </div>
            <iframe className="iframe" src={youtubeLink} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
  }
};

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, { showDetail, searchGame })(GameDetails);
