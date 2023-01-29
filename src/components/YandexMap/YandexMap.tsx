import React, { FC, useEffect, useState } from 'react';
import useGeolocation from 'react-hook-geolocation';

import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';

import { YMapsApi } from 'react-yandex-maps';
import { getYmapCoordinates } from '../../utils/yMapHelper';

interface IYandexMap {
  ymap: YMapsApi | null;
  setYMap(ymap: YMapsApi | null): void;
  city: string;
  center: any;
}

const YandexMap: FC<IYandexMap> = ({ setYMap, center, ymap, city }) => {
  const [locationCoordinates, setLocationCoordinates] = useState();

  const getAndSetCurrentCoordinates = async (adress: string) => {
    if (ymap) {
      const res = await ymap.geocode(adress);
      setLocationCoordinates(getYmapCoordinates(res));
      console.log(locationCoordinates);
    }
  };

  useEffect(() => {
    if (ymap && city) {
      getAndSetCurrentCoordinates(`${city}`);
    }
  }, [ymap, city]);

  return (
    <YMaps query={{ apikey: `${import.meta.env.VITE_APP_MAPS_KEY}` }}>
      <YMap
        modules={['geocode']}
        width={`100%`}
        height={`170px`}
        state={{ center: locationCoordinates || [55.751574, 37.573856], zoom: 12 }}
        onLoad={(ymap) => setYMap(ymap)}>
        <Placemark
          options={{ preset: 'islands#circleIcon', iconColor: '#0EC261' }}
          geometry={center}
        />
      </YMap>
    </YMaps>
  );
};

export default YandexMap;
