import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { showDetail } from '../actions';
import Rating from './Rating';

class GameDetails extends React.Component {

componentDidMount() {
  this.props.showDetail(this.props.params.gameID);
}

  render() {
    // console.log("GameDetails props: ", this.props);
    console.log("State: ", this.state);
    if (!this.props.game) {
      return <h1>Loading...</h1>
    }

    const { name, cover, id, img, summary, videos, esrb, aggregated_rating } = this.props.game;
    const imageUrl = cover ? `http://images.igdb.com/igdb/image/upload/w_320/${cover.cloudinary_id}.png` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
    const video = videos ? videos[0].video_id : 'dQw4w9WgXcQ';
    const youtubeLink = `https://www.youtube.com/embed/${video}`;
    const summaryText = summary ? summary : 'N/A';
    const rating = aggregated_rating ? Math.round(aggregated_rating / 10) + '/10' : 'Not Rated';

    return (
        <div className="gameDetails">
          <button onClick={() => browserHistory.push('/')}>Back</button>
          <h1>{name}</h1>
          <h4>{aggregated_rating}</h4> <br />
            <Rating /><h5>{rating}</h5> <br />
            <img
                src={imageUrl}
                alt="error, no img found" /><br /><br />
              <h5>Summary: {summaryText}</h5>
            <a href={youtubeLink}>Trailer</a><br />
            <iframe width="320" height="315" src={youtubeLink} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
  }
};

const mapStateToProps = state => ({
  game: state.game
})

export default connect(mapStateToProps, { showDetail })(GameDetails);
