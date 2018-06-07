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
          id: 1
      }],
    }
}
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
