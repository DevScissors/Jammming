import React, { Component } from 'react';
import './TrackList.css';
import './Track';


class TrackList extends Component {
  render() {
    return (
        <div className="TrackList">
            <Track key={track.id} track={this.props.tracks.map()} />
            <p>{this.props.track.name} {this.props.track.artist} {this.props.track.album}</p>
        </div>
    );
  }
}

export default TrackList;