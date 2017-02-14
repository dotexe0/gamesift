import React from 'react';
import {Link} from 'react-router';

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <img src={this.props.img} alt="error, no img found" />
            <strong>
                {this.props.title}
            </strong>
            &nbsp;
            {this.props.videoId}
        </div>
    );
  };
}
