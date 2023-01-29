import React, { useEffect, useState } from 'react';
import YandexMap from '../YandexMap/YandexMap';
import { YMapsApi } from 'react-yandex-maps';
import { getGeocodeByName, getYmapCoordinates } from '../../utils/yMapHelper';
import useDebounce from '../../hooks/useDebounce';

const index = () => {
  const [ymap, setYmap] = useState<YMapsApi | null>(null);
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');

  const [cityCoordinates, setCityCoordinates] = useState<Array<number | null>>();

  const debouncedCity = useDebounce(city, 1000);

  const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ padding: `30px` }}>
      <input
        style={{ margin: `20px`, padding: `10px 20px` }}
        type="text"
        value={adress}
        onChange={(e) => handleAdressChange(e)}
        placeholder={'adress'}
      />
      <input
        style={{ margin: `20px`, padding: `10px 20px` }}
        type="text"
        value={city}
        onChange={(e) => handleCityChange(e)}
        placeholder={`city`}
      />
      <button onClick={() => getGeocodeByName({ ymap, city })}>Поиск</button>
      <div>
        <YandexMap center={cityCoordinates} setYMap={setYmap} ymap={ymap} city={debouncedCity} />
      </div>
    </div>
  );
};

export default index;
