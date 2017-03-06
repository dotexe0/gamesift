import React from 'react';
import {Link} from 'react-router';

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("proops: ", this.props);
    const youtubeLink = `https://www.youtube.com/watch?v=${this.props.videoId.video_id}`;

    return (
        <div className="gameCard">
          <strong>
              {this.props.title}
          </strong><br />
        <img src={this.props.img} alt="error, no img found" /><br />
          <a href={youtubeLink}>Trailer</a>
        </div>
    );
  };
}
