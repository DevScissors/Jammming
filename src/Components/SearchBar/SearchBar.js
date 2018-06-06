import React, { Component } from 'react';
import './SearchBar.css';

class SearhcBar extends Component {
  render() {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <a>SEARCH</a>
        </div>
    );
  }
}

export default SearchBar;