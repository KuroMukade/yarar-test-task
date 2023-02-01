import React, { FC } from 'react'
import { YMaps, Map as YMap, Clusterer, Placemark } from 'react-yandex-maps';
import type { YMapsApi } from 'react-yandex-maps'
import { YMapType } from '../types/ymap';


interface IYandexMapAll {
  ymap: YMapType;
  setYMap(ymap: YMapType): void;
}

const YandexMapAll: FC<IYandexMapAll> = ({}) => {
  return (
    <YMaps>
      <YMap></YMap>
    </YMaps>
  )
}

export default YandexMapAll