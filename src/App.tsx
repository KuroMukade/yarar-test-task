import React from 'react';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Map from './components/Map/Map';

import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Navigation />
        <Map />
      </div>
    </div>
  );
}

export default App;
