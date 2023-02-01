import React, { useEffect, useState } from 'react';

import { YMapsApi } from 'react-yandex-maps';

import InputField from '../InputField/InputField';

import useDebounce from '../../hooks/useDebounce';

import { postToServer, requestGet } from '../../api/requests';
import { ICurrentPoint } from '../types/points';
import YandexMapAdd from '../YandexMapAdd/YandexMapAdd';
import { getAddress } from '../../utils/yMapHelper';

import type { YMapType } from '../types/ymap';

const MapBoard = () => {
  const [ymap, setYMap] = useState<YMapType>(null);

  const [adress, setAdress] = useState('');
  const [convertedAdress, setConvertedAdress] = useState('');

  const [city, setCity] = useState('');
  const [points, setPoints] = useState<any>();

  const [allCities, setAllCities] = useState<ICurrentPoint[] | null>(null);

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const debouncedCity = useDebounce(city, 1500);
  const debouncedAdress = useDebounce(convertedAdress, 1500);

  const [currentLocation, setCurrentLocation] = useState<Array<number>>();

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
    if (city && adress) {
      getAddress(ymap, adress).then((res) => setConvertedAdress(res));
    }
  }, [ymap, adress, city]);

  useEffect(() => {
    getPoints().then((data) => setPoints(data));
  }, []);

  const buttonClickHandler = () => {
    if (currentLocation) {
      postToServer(currentLocation);
    }
  };

  return (
    <div className="map">
      {loading && 'Loading...'}
      <div className="map-wrapper">
        <div className="inputs-wrapper">
          {/* <Input
              value={adress}
              onChange={(e) => handleAdressChange(e)}
              type="text"
            />
            <label>Адрес</label>
          </div>
          <div className="input-data">
            <Input
              value={city}
              onChange={(e) => handleCityChange(e)}
              type="text"
            /> */}
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
        <div className="yandex-map">
          {/* <YandexMap
            onPointClickHandler={onPointClick}
            points={points?.data}
            setYMap={setYmap}
            ymap={ymap}
            city={debouncedCity}
            adress={debouncedAdress}
          /> */}
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
