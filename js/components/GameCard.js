import React from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

import { showDetail } from '../actions';

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //props here is a single game object
    // console.log("GameCard props: ", this.props);
    // console.log("State: ", this.state);
    const youtubeLink = `https://www.youtube.com/watch?v=${this.props.videoId}`;

    return (
        <div className="gameCard">
          {this.props.title}<br />
          <img
              onClick={() => hashHistory.push(`/games/${this.props.id}`)}
              src={this.props.img}
              alt="error, no img found" /><br /><br />
           <a href={youtubeLink}>Trailer</a><br />
        </div>
    );
  };
}
