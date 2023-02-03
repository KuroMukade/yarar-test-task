import React, { FC, useState, useEffect, useRef, MutableRefObject } from 'react';
import { YMaps, Map as YMap, Placemark, YMapsApi } from 'react-yandex-maps';
import { getGeocodeByName, getYmapCoordinates } from '../../utils/yMapHelper';

import { YMapType } from '../types/ymap';
import { CurrentLocation } from '../MapBoard/MapBoard';

interface IYandexMapAdd {
  ymap: YMapType;
  setYMap(ymap: YMapType): void;
  city: string;
  adress: string;
  setCurrentLocation(location: CurrentLocation): void;
}

const YandexMapAdd: FC<IYandexMapAdd> = ({ ymap, setYMap, city, adress, setCurrentLocation }) => {
  const [map, setMap] = useState<any>();
  const [location, setLocation] = useState<Array<number>>();
  const [cityLocation, setCityLocation] = useState<Array<number>>();

  useEffect(() => {
    if (city && adress && ymap) {
      getGeocodeByName({ ymap, city, adress }).then((res) => setLocation(getYmapCoordinates(res)));
      getGeocodeByName({ ymap, city }).then((res) => setCityLocation(getYmapCoordinates(res)));
    }
  }, [city, adress]);

  useEffect(() => {
    if (!map?.geoObjects.getBounds()) {
      return;
    }

    map.setBounds(map.geoObjects.getBounds(), { zoomMargin: 50 });
    if (cityLocation && location) {
      setCurrentLocation({city: cityLocation, adress: location});
    }
  }, [map, location, cityLocation]);


  return (
    <YMaps query={{ apikey: import.meta.env.VITE_APP_MAPS_KEY }}>
      <YMap
        instanceRef={setMap}
        modules={['geocode']}
        width={`100%`}
        height={`170px`}
        state={{ center: location || [55.7522, 37.6156], zoom: 10 }}
        onLoad={(ymap) => setYMap(ymap)}>
        <Placemark
          options={{ preset: 'islands#circleIcon', iconColor: '#0EC261' }}
          geometry={location}
        />
        <Placemark
          options={{ preset: 'islands#circleIcon', iconColor: '#0EC261' }}
          geometry={cityLocation}
        />
      </YMap>
    </YMaps>
  );
};

export default YandexMapAdd;
