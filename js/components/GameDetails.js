import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { showDetail } from '../actions';
class GameDetails extends React.Component {

componentDidMount() {
  this.props.showDetail(this.props.params.gameID);
}

  render() {
    // consoe.log("GameDetails props: ", this.props);
    console.log("State: ", this.state);
    if (!this.props.game) {
      return <h1>Loading...</h1>
    }

    const { name, id, img, summary, videos } = this.props.game;
    const youtubeLink = `https://www.youtube.com/embed/${videos[0].video_id}`;

    return (
        <div className="gameDetails">
          <button onClick={() => browserHistory.push('/')}>Back</button>
          <h1>{name}</h1>
          <h5>Summary: {summary}</h5>
            <a href={youtubeLink}>Trailer</a><br />
            <iframe width="560" height="315" src={youtubeLink} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
  }
};

const mapStateToProps = state => ({
  game: state.game
})


export default connect(mapStateToProps, { showDetail })(GameDetails);
