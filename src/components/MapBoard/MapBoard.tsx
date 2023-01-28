import React, { useState } from 'react';
import YandexMap from '../MapComponent/MapComponent';
import useGeolocation from 'react-hook-geolocation';

const MapBoard = () => {  
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');

  const geolocation = useGeolocation();
  const location = [geolocation.latitude, geolocation.longitude] || [55.7887, 49.1221];

  const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(prev => prev = e.target.value)
  }

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(prev => prev = e.target.value)
  }

  



  return (
    <div className="map-container">
      <h1>Где вы находитьесь или будете принимать волонтеров</h1>
      <input type="text" placeholder='Адрес' value={adress} onChange={(e) => handleAdressChange(e)} />
      {/* в поле адрес содержится только текстовое описание адреса или широта/долгота */}
      <input type="text" value={city} onChange={(e) => handleCityChange(e)} placeholder="ближайший город" />
      {/* город */}
      <YandexMap location={location} width="100%" height="175px" />
      <button className="btn-outline-lightblue">Дальше</button>
    </div>
  );
};

export default MapBoard;
