import React, { FC, useEffect, useState } from 'react';
import useGeolocation from 'react-hook-geolocation';

import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';

import { YMapsApi } from 'react-yandex-maps';
import { getGeocodeByName, getYmapCoordinates } from '../../utils/yMapHelper';
import { IAllPoints, ICurrentPoint } from '../types/points';

interface IYandexMap {
  ymap: YMapsApi | null;
  setYMap(ymap: YMapsApi | null): void;
  city: string;
  center: any;
  points: Array<ICurrentPoint>;
}

interface IResponsePlacemarkData extends ICurrentPoint {
  location: Array<number>;
}

export interface IPoints {
  points: IAllPoints;
}

const YandexMap: FC<IYandexMap> = ({ setYMap, center, ymap, city, points }) => {
  const [locationCoordinates, setLocationCoordinates] = useState();
  const [pointsData, setPointsData] = useState<IResponsePlacemarkData[]>([]);

  const getAndSetCurrentCoordinates = async (adress: string) => {
    if (ymap) {
      const res = await ymap.geocode(adress);
      setLocationCoordinates(getYmapCoordinates(res));
    }
  };

  const setPlacemarksToState = (request: IResponsePlacemarkData) => {
    const placemarks = { ...request, location: getYmapCoordinates(request.location) };
    setPointsData((prev) => [...prev, placemarks]);
  };

  useEffect(() => {
    if (points && ymap) {
      points.map((point) => {
        if (point.cityId && point.adress) {
          getGeocodeByName({
            city: point.cityId.name,
            adress: point.adress,
            ymap: ymap,
          })
            .then((res) => ({
              location: res,
              adress: point.adress,
              cityId: point.cityId,
              name: point.name,
              id: point.id,
            }))
            .then((item) => setPlacemarksToState(item));
        }
      });
    }
  }, [ymap, points]);

  useEffect(() => {
    if (ymap && city) {
      getAndSetCurrentCoordinates(`${city}`);
    }
  }, [ymap, city]);

  console.log(pointsData);
  console.log(ymap)

  return (
    <YMaps query={{ apikey: `${import.meta.env.VITE_APP_MAPS_KEY}` }}>
      <YMap
        modules={['geocode']}
        width={`100%`}
        height={`170px`}
        state={{ center: locationCoordinates || [55.751574, 37.573856], zoom: 12 }}
        onLoad={(ymap) => setYMap(ymap)}>
        {pointsData.length > 0 &&
          pointsData.map((point) => {
            console.log(point)
            return (
              <Placemark
                options={{ preset: 'islands#circleIcon', iconColor: '#0EC261' }}
                geometry={point.location}
                key={point.adress}
                onClick={() => console.log(point)}
              />
            );
          })}
      </YMap>
    </YMaps>
  );
};

export default YandexMap;
