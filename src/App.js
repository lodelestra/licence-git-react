import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Netflyx</h1>
        </div>
       <div>
            <h2>trending now</h2>
            <div className="App-movie-container">
                <Movie/>
                <Movie/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
