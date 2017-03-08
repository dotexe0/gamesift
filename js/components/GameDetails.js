import React from 'react';
import { connect } from 'react-redux';

export default class GameDetails extends React.Component {

  render() {
    console.log("GameCard props: ", this.props);
    console.log("State: ", this.state);
    return (
        <div className="gameCard">
          {this.props.title}<br />
        <img onClick={() => hashHistory.push(`/game/${this.props.id}`)} src={this.props.img} alt="error, no img found" /><br /><br />
          <a href={youtubeLink}>Trailer</a><br />
        </div>
    )
  }
};

// const mapStateToProps = state => {
//   games: state.games
// }
//
// export default connect(mapStateToProps)(GameDetails);
