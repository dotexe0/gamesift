import React from 'react';
import { connect } from 'react-redux';

class GameDetails extends React.Component {

  render() {
    console.log("GameCard props: ", this.props);
    console.log("State: ", this.state);
    const { title, id, img } = this.props;

    return (
        <div className="gameDetails">
        <button onClick={() => hashHistory.push("/games")}>Back</button>

          {title}<br />

          <img src={img} alt="error, no img found" /><br /><br />
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
