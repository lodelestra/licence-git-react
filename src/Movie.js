import React, { Component } from 'react';
import logo from './logo.svg';
import './Movie.css';
class Movie extends Component {

  render() {
    return (
      <div className="Movie">
        <div className="Movie-header">
          <h2>title</h2>
          <img
            src={logo}
            className="Movie-thumbnail"
            alt="logo"
            height="150"
            width="150"
          />
        </div>
        <p className="Movie-synopsis">
          movie synopsis
        </p>
      </div>
    );
  }
}
export default Movie;
