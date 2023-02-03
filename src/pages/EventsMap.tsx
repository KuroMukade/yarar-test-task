import React, { useEffect, useState } from 'react';

import EventsMapSidebar from '../components/EventsMapSidebar/EventsMapSidebar';
import EventMapHeader from '../components/EventMapHeader/EventMapHeader';
import YandexMapAll from '../components/YandexMapAll/YandexMapAll';
import { YMapType } from '../components/types/ymap';
import { IAllPoints, ICurrentPoint } from '../components/types/points';
import { requestGet } from '../api/requests';
import { YMapsApi } from 'react-yandex-maps';

const EventsMap = () => {
  const [ymap, setYmap] = useState<YMapsApi>();
  const [points, setPoints] = useState<any>();

  useEffect(() => {
    requestGet('/points').then((res) => setPoints(res.data));
  }, [])


  return (
    <div className='all-wrapper'>
      <EventMapHeader />
      <div className="events-map">
        <EventsMapSidebar points={points} />
        <YandexMapAll ymap={ymap} setYMap={setYmap} points={points} />
      </div>
    </div>
  );
};

export default EventsMap;
