import React, { FC, useEffect, useState } from 'react';
import { YMaps, Map as YMap, Placemark, Clusterer } from 'react-yandex-maps';
import { YMapsApi } from 'react-yandex-maps';
import { ICurrentPoint } from '../types/points';
import { getGeocodeByName, getYmapCoordinates } from '../../utils/yMapHelper';

interface IYandexMapAll {
  ymap: YMapsApi | undefined;
  setYMap(ymap: YMapsApi): void;
  points: Array<ICurrentPoint>;
}

interface IResponsePlacemarkData extends ICurrentPoint {
  location: Array<number>;
}

const YandexMapAll: FC<IYandexMapAll> = ({ points, ymap, setYMap }) => {
  const [pointsData, setPointsData] = useState<IResponsePlacemarkData[]>([]);

  const setPlacemarksToState = (request: IResponsePlacemarkData) => {
    const placemarks = { ...request, location: getYmapCoordinates(request.location) };
    setPointsData((prev) => [...prev, placemarks]);
  };

  useEffect(() => {
    setPointsData([]);
    if (points && ymap) {
      points.map((point) => {
        if (point.cityId && point.adress) {
          getGeocodeByName({
            city: point.cityId[0].name,
            adress: point.adress,
            ymap: ymap,
          })
            .then((res) => ({
              location: res,
              adress: point.adress,
              cityId: point.cityId,
              name: point.name,
              id: point.id,
              image: point?.image,
            }))
            .then((item) => setPlacemarksToState(item));
        }
      });
    }
  }, [ymap, points]);

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_APP_MAPS_KEY }}>
      <YMap
        modules={['geocode']}
        state={{
          center: [55.751574, 37.573856],
          zoom: 9,
        }}
        width={`50vw`}
        height={`100%`}
        onLoad={(ymap) => setYMap(ymap)}>
        <Clusterer>
          {pointsData.map((point, index) => (
            <Placemark
              key={index}
              geometry={point.location}
              options={{ iconColor: '#0EC261' }}
              onClick={() => console.log(point.location)}
            />
          ))}
        </Clusterer>
      </YMap>
    </YMaps>
  );
};

export default YandexMapAll;
