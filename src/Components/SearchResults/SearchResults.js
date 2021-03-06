import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.js';

class SearchResults extends Component {
  render() {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList playlistTracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
        </div>
    );
  }
}

export default SearchResults;