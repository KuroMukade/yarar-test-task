import React, { FC, useRef, useState } from 'react';

import { YMaps, Map } from '@pbe/react-yandex-maps';
import useGeolocation from 'react-hook-geolocation';

interface IYandexMapProps {
  width: string;
  height: string;
  location: number[];
}

const YandexMap: FC<IYandexMapProps> = ({ width, height, location }) => {
  const mapRef = useRef();

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });


  return (
    <YMaps>
      <Map
        width={width}
        height={height}
        defaultState={{ center: location, zoom: 15 }}
        instanceRef={mapRef}
        >
        </Map>
    </YMaps>
  );
};

export default YandexMap;
