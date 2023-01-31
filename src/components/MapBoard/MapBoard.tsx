import React, { useEffect, useState } from 'react';
import YandexMap from '../YandexMap/YandexMap';
import { YMapsApi } from 'react-yandex-maps';

import useDebounce from '../../hooks/useDebounce';

import { requestGet } from '../../api/requests';
import { ICurrentPoint } from '../types/points';

interface ISidebar {
  isOpen: boolean;
  isLoading: boolean;
  setIsOpen: (flag: boolean) => void;
  cities: ICurrentPoint[] | null;
}

const Sidebar = ({ isOpen, isLoading, cities, setIsOpen }: ISidebar) => {
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={isOpen ? 'sidebar active' : 'sidebar'}>
      <ul className="sidebar-items-container">
        {cities?.map((item) => (
          <li key={item.id} className="sidebar-item">
            <img className="sidebar-item-image" src={item.image} alt="собака бедная" />
            <div className="sidebar-item-text-container">
              <p className="sidebar-item-text">{item.name}</p>
              <p className="sidebar-item-city">{item.cityId[0].name}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="sidebar-close" onClick={() => setIsOpen(false)}>
        X
      </div>
    </div>
  );
};

const MapBoard = () => {
  const [ymap, setYmap] = useState<YMapsApi | null>(null);

  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');

  const [points, setPoints] = useState<any>();

  const [allCities, setAllCities] = useState<ICurrentPoint[] | null>(null);

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const debouncedCity = useDebounce(city, 500);
  const debouncedAdress = useDebounce(adress, 500);

  const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const getPoints = async () => {
    return await requestGet('/points');
  };

  const onPointClick = (points: ICurrentPoint[], id: string) => {
    setIsOpen(true);
    setLoading(true);
    const cityPoints = points.filter((item) => item.cityId[0].id === id);
    setAllCities(cityPoints);
    setLoading(false);
  };

  useEffect(() => {
    getPoints().then((data) => setPoints(data));
  }, []);

  return (
    <div className="map">
      {loading && 'Loading...'}
      <div className="inputs-wrapper">
        <div className="input-data">
          <input
            value={adress}
            onChange={(e) => handleAdressChange(e)}
            placeholder={`Адрес`}
            type="text"
          />
          <label>Адрес</label>
        </div>
        <div className="input-data">
          <input
            value={city}
            onChange={(e) => handleCityChange(e)}
            placeholder={`Город`}
            type="text"
          />
          <label>Город</label>
        </div>
      </div>
      <div className="yandex-map">
        <YandexMap
          onPointClickHandler={onPointClick}
          points={points?.data}
          setYMap={setYmap}
          ymap={ymap}
          city={debouncedCity}
          adress={debouncedAdress}
        />
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} cities={allCities} isLoading={loading} />
    </div>
  );
};

export default MapBoard;
