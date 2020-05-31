import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions"; //imported action creator

class SongList extends React.Component {
  redneList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.redneList()}</div>;
  }
}

//state argument is states from "reducers"
// songs is called from combinereducers -> songs:songsReducer
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);

//connect function calls 2nd function i.e SongList
// function connet() {
//    return function() {
//        return 'Hi there'
//    }
//}

//connect() () <-- this results Hi there
