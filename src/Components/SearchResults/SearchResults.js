
import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList';

class SearchResults extends Component {
  render() {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <a>SEARCH</a>
        </div>
    );
  }
}

export default SearchResults;