import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';

class Playlist extends Component {
    constructor (props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
  handleNameChange (event) {
    this.props.onNameChange(event.target.value) 
  }
  render() {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
                <TrackList playlistTracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove}/>
            <a onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
    );
  }
}

export default Playlist;


