import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResults: [],
        playlistName: 'New Playlist',
        playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    //let resultList = this.state.searchResults;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    //resultList.pop(track);
    this.setState({playlistTracks: tracks});
    //this.setState({searchResults: resultList});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    //let resultList = this.state.searchResults;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    //resultList.push(track);

    this.setState({playlistTracks: tracks});
    //this.setState({searchResults: resultList});
  }

  updatePlaylistName(name) {      
    this.setState({playlistName: name});    
  }
  
  savePlaylist () {
      const trackUris = this.state.playlistTracks.map(track => track.uri);
      Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
        this.setState({
          playlistName: 'New Playlist',
          playlistTracks: []
        });
      });
    }

  search (searchTerm) {
    Spotify.search(searchTerm).then(searchResults=> {
      this.setState({searchResults: searchResults});
    })

    console.log('c',this.state.searchResults);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
          <SearchResults  searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
