import React from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

import { showDetail } from '../actions';

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  truncateText = text => {
   console.log(text);
   if (text.length > 25) {
     return text.substr(0, 25) + "...";
   }
   return text;
  }

  render() {
    //props here is a single game object
    // console.log("GameCard props: ", this.props);
    // console.log("State: ", this.state);
    const youtubeLink = `https://www.youtube.com/embed/${this.props.videoId}`;
    const {title, img, id, summary} = this.props;
    return (
        <div className="gameCard">
          <strong>{this.truncateText(title)}</strong><br />
        <Link to={`/home/games/${id}`}>
          <img
              onClick={() => hashHistory.push(`/games/${id}`)}
              src={img}
              alt="error, no img found" /><br /><br />
        </Link>
        </div>
    );
  };
}
