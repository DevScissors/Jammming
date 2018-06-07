
import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList';

class SearchResults extends Component {
  render() {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.SearchResults} />
        </div>
    );
  }
}

export default SearchResults;