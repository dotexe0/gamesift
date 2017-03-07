import React from 'react';
import {Link} from 'react-router';

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //props here is a single game object
    // console.log("GameCard props: ", this.props);
    const youtubeLink = `https://www.youtube.com/watch?v=${this.props.videoId.video_id}`;

    return (
        <div className="gameCard">
          {this.props.title}<br />
        <img src={this.props.img} alt="error, no img found" /><br /><br />
          <a href={youtubeLink}>Trailer</a><br />
        </div>
    );
  };
}
