import React, { FC, useEffect, useState } from 'react';

import { YMaps, Map as YMap, Placemark, Clusterer } from 'react-yandex-maps';

import { YMapsApi } from 'react-yandex-maps';
import { getGeocodeByName, getYmapCoordinates } from '../../utils/yMapHelper';
import { IAllPoints, ICurrentPoint } from '../types/points';

interface IYandexMap {
  ymap: YMapsApi | null;
  setYMap(ymap: YMapsApi | null): void;
  city: string;
  points: Array<ICurrentPoint>;
  onPointClickHandler: (point: ICurrentPoint[], id: string) => void;
}

interface IResponsePlacemarkData extends ICurrentPoint {
  location: Array<number>;
}

export interface IPoints {
  points: IAllPoints;
}

const YandexMap: FC<IYandexMap> = ({ setYMap, ymap, city, points, onPointClickHandler }) => {
  const [locationCoordinates, setLocationCoordinates] = useState<Array<number>>([
    55.751574, 37.573856,
  ]);
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
              image: point.image || undefined,
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

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_APP_MAPS_KEY }}>
      <YMap
        modules={['geocode']}
        width={`100%`}
        height={`400px`}
        state={{ center: locationCoordinates, zoom: 12 }}
        onLoad={(ymap) => setYMap(ymap)}>
        <Clusterer
          options={{
            preset: 'islands#invertedGreenClusterIcons',
            groupByCoordinates: false,
          }}>
          {pointsData.length > 0 &&
            pointsData.map((point) => {
              return (
                <Placemark
                  options={{ preset: 'islands#circleIcon', iconColor: '#0EC261' }}
                  geometry={point.location}
                  key={point.adress}
                  onClick={() => {
                    onPointClickHandler(pointsData, point.cityId.id);
                    setLocationCoordinates(point.location);
                  }}
                />
              );
            })}
        </Clusterer>
      </YMap>
    </YMaps>
  );
};

export default YandexMap;
