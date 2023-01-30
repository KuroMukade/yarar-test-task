import React, { useEffect, useState } from 'react';
import YandexMap from '../YandexMap/YandexMap';
import { YMapsApi } from 'react-yandex-maps';
import { getGeocodeByName, getYmapCoordinates } from '../../utils/yMapHelper';
import useDebounce from '../../hooks/useDebounce';

import { requestGet } from '../../api/requests';

const index = () => {
  const [ymap, setYmap] = useState<YMapsApi | null>(null);
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');

  const [points, setPoints] = useState<any>();

  const [cityCoordinates, setCityCoordinates] = useState<Array<number | null>>();

  const debouncedCity = useDebounce(city, 1500);

  const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const getPoints = async () => {
    return await requestGet('/points');
  }

  useEffect(() => {
    getPoints().then(data => setPoints(data))
  }, []);

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
      <button onClick={() => getGeocodeByName({ ymap, city, adress })}>Поиск</button>
      <div>
        <YandexMap points={points?.data} center={cityCoordinates} setYMap={setYmap} ymap={ymap} city={debouncedCity} />
      </div>
    </div>
  );
};

export default index;
