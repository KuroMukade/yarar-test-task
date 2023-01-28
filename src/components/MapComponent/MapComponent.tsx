import React, { FC, useEffect, useState } from 'react';

import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import useGeolocation from 'react-hook-geolocation';
import { YMapsApi } from 'react-yandex-maps';
import { getGeocodeByName, getYmapCoordinates } from '../../helpers/yMapHelper';

interface IMap {
  width: string;
  height: string;
  location: number[] | null;
  points: Array<ICurrentPoint> | null,
  currentCity?: ICurrentCity | null,
  currentPoint?: {id: string, value: string} | null,
  pointClickHandler: (item: ICurrentPoint) => void,
}

interface IPoints {
  points: IAllPoints
}

type ICurrentPoint = {
  id: string,
  name: string,
  adress: string,
  cityId: {
      name: string,
      id: string
  }
}

interface IAllPoints {
  data: Array<ICurrentPoint> | null,
  error: string | null
}

export interface ICities {
  cities: ICityData
}

export type ICurrentCity = {
  id: string,
  updatedAt?: number,
  createdAt?: number,
  name: string
}

interface ICityData {
  current: ICurrentCity | null,
  all: IAllCities
}

interface IAllCities {
  data: Array<ICurrentCity> | null,
  isLoading: boolean,
  error: string | null
}

interface IResponsePlacemarkData extends ICurrentPoint {
  location: Array<number>
}

const YandexMap: FC<IMap> = ({ points, currentCity, currentPoint, pointClickHandler, width, height, location }) => {
  const [ymap, setYMap] = useState<YMapsApi | null>(null);
  const [pointsData, setPointsData] = useState<IResponsePlacemarkData[]>([]);
  const [locationCoordinates, setLocationCoordinates] = useState<Array<number> | null>(null);

  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  const setPlacemarksToState = (request: IResponsePlacemarkData) => {
    const placemarks = {...request, location: getYmapCoordinates(request.location)};
    setPointsData(prev => [...prev, placemarks]);
  }

  const setLocationCoordinatesHandler = (item: IResponsePlacemarkData) => {
    setLocationCoordinates(item.location);
    pointClickHandler({adress: item.adress, cityId: item.cityId, name: item.name, id: item.id});
  }

  const getAndSetCurrentCoordinates = async (address: string) => {
    const res = await ymap!.geocode(address);
    setLocationCoordinates(getYmapCoordinates(res));
  }

  useEffect(() => {
    if (points && ymap) {
      points.map((item) => {
        if (item.cityId && item.adress) {
          getGeocodeByName({
            city: item.cityId.name,
            address: item.adress,
            ymap: ymap
          })
          .then(res => ({location: res, adress: item.adress, cityId: item.cityId, name: item.name, id: item.id}))
          .then(item => setPlacemarksToState(item as IResponsePlacemarkData))
        }
      })
    }
  }, [points, ymap])

  return (
    <YMaps query={{apikey: `${import.meta.env.VITE_APP_MAPS_KEY}`}}>
      <YMap
        width={width}
        height={height}
        modules={['geocode']}
        state={{center: location || [54.31228, 48.395406], zoom: 15 }}
        onLoad={(ymaps) => setYMap(ymaps)}
        >
          {
            pointsData.length > 0 && 
            pointsData.map((item) => (
              <Placemark
                options={{preset: 'islands#circleIcon', iconColor: '#0EC261'}}
                geometry={item.location as any}
                key={item.adress}  
                onClick={() => setLocationCoordinatesHandler(item as any)}
              />
            ))
          }
        </YMap>
    </YMaps>
  );
};

export default YandexMap;
