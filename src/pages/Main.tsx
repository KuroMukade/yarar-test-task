import React from 'react';

import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import MapBoard from '../components/MapBoard/MapBoard';

const Main = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Navigation />
        <MapBoard />
      </div>
    </>
  );
};

export default Main;
