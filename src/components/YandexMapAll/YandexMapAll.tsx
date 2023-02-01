import React, { FC } from 'react'
import { YMaps, Map as YMap, Clusterer, Placemark } from 'react-yandex-maps';
import type { YMapsApi } from 'react-yandex-maps'

type Ymap = YMapsApi | null;

interface IYandexMapAll {
  ymap: Ymap;
  setYMap(ymap: Ymap): void;
}

const YandexMapAll: FC<IYandexMapAll> = ({}) => {
  return (
    <YMaps>
      <YMap></YMap>
    </YMaps>
  )
}

export default YandexMapAll