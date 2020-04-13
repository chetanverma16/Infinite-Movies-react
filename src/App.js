import React from 'react';
import './App.css';

// Components
import Header from './Components/header'
import MoviesContainer from './Components/moviesContainer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MoviesContainer></MoviesContainer>
    </div>
  );
}

export default App;
