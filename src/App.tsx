import React from 'react';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import './scss/app.scss';
import MapBoard from './components/MapBoard/MapBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Navigation />
        <MapBoard />
      </div>
    </div>
  );
}

export default App;
