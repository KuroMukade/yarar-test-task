import React from 'react';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MapBoard from './components/MapBoard';

import './scss/app.scss';


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
