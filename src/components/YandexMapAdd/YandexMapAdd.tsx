import React, { FC, useState, useEffect } from 'react';
import { YMaps, Map as YMap, Placemark, YMapsApi } from 'react-yandex-maps';
import { getGeocodeByName, getYmapCoordinates } from '../../utils/yMapHelper';

import { YMapType } from '../types/ymap';

interface IYandexMapAdd {
  ymap: YMapType;
  setYMap(ymap: YMapType): void;
  city: string;
  adress: string;
  setCurrentLocation(location: Array<number>): void;
}

const YandexMapAdd: FC<IYandexMapAdd> = ({ ymap, setYMap, city, adress, setCurrentLocation }) => {
  const [zoom, setZoom] = useState<number>(10);
  const [pointLocation, setPointLocation] = useState<any>();

  const getAndSetCurrentCoordinates = async (city: string, adress: string) => {
    if (ymap) {
      const res = await getGeocodeByName({ ymap: ymap, adress: adress, city: city });
      setPointLocation(getYmapCoordinates(res));
    }
  };

  useEffect(() => {
    if (city && adress) {
      getAndSetCurrentCoordinates(city, adress);
    }
  }, [city, adress]);

  useEffect(() => {
    console.log(pointLocation)
    if (pointLocation) {
      setCurrentLocation(pointLocation);
    }
  }, [pointLocation])

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_APP_MAPS_KEY }}>
      <YMap
        modules={['geocode']}
        width={`100%`}
        height={`170px`}
        state={{ center: pointLocation || [55.7522, 37.6156], zoom: zoom }}
        onLoad={(ymap) => setYMap(ymap)}>
        <Placemark
          options={{ preset: 'islands#circleIcon', iconColor: '#0EC261' }}
          geometry={pointLocation}></Placemark>
      </YMap>
    </YMaps>
  );
};

export default YandexMapAdd;
