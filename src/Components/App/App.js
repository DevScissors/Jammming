import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Playlist from '../Playlist/Playlist.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResults: [{
            name: 'Fake song',
            artist: 'Test artist',
            album: 'Greatest Hits',
            id: 1
        }],
        playlistName: 'New Playlist',
        playlistTracks: [{
          name: 'Real song',
          artist: 'Fake artist',
          album: 'Special Edition',
          id: 2
        }],
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    else {
      alert('Song already added to playlist.');
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack()} />
          <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
