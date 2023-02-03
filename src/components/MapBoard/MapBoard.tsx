import React, { useEffect, useState } from 'react';

import YandexMapAdd from '../YandexMapAdd/YandexMapAdd';
import InputField from '../InputField/InputField';
import useDebounce from '../../hooks/useDebounce';

import { postToServer } from '../../api/requests';
import { getAddress } from '../../utils/yMapHelper';

import type { YMapType } from '../types/ymap';

export type CurrentLocation = { city: Array<number>, adress: Array<number> }


const MapBoard = () => {
  const [ymap, setYMap] = useState<YMapType>(null);

  const [adress, setAdress] = useState('');
  const [convertedAdress, setConvertedAdress] = useState('');

  const [city, setCity] = useState('');

  const debouncedCity = useDebounce(city, 1500);
  const debouncedAdress = useDebounce(convertedAdress, 1500);

  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>();

  const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (city && adress) {
      getAddress(ymap, adress).then((res) => setConvertedAdress(res));
    }
  }, [ymap, adress, city]);

  const buttonClickHandler = () => {
    if (currentLocation) {
      postToServer(currentLocation);
    }
  };

  return (
    <div className="map">
      <div className="map-wrapper">
        <div className="inputs-wrapper">
          <InputField
            type={'text'}
            value={adress}
            onChange={(e) => handleAdressChange(e)}
            text="Адрес"
          />
          <InputField
            type={'text'}
            value={city}
            onChange={(e) => handleCityChange(e)}
            text="Город"
          />
        </div>
        <YandexMapAdd
          setCurrentLocation={setCurrentLocation}
          ymap={ymap}
          setYMap={setYMap}
          city={debouncedCity}
          adress={debouncedAdress}
        />
        <div className="map-btn-wrapper">
          <button
            disabled={currentLocation === undefined}
            onClick={buttonClickHandler}
            className="map-btn btn-blue">
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapBoard;
