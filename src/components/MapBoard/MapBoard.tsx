import React from 'react';
import YandexMap from '../MapComponent/Map';
import useGeolocation from 'react-hook-geolocation';

const MapBoard = () => {  
  const geolocation = useGeolocation();
  const location = [geolocation.latitude, geolocation.longitude] || [55.7887, 49.1221];


  return (
    <div className="map-container">
      <h1>Где вы находитьесь или будете принимать волонтеров</h1>
      <input type="text" value="адрес" />
      {/* в поле адрес содержится только текстовое описание адреса или широта/долгота */}
      <input type="text" value="ближайший город" />
      {/* город */}
      <YandexMap location={location} width="100%" height="175px" />
      <button className="btn-outline-lightblue">Дальше</button>
    </div>
  );
};

export default MapBoard;
