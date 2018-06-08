import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';

class Playlist extends Component {
  render() {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
                <TrackList playlistTracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove}/>
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
    );
  }
}

export default Playlist;