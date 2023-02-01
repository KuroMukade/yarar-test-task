import React, {useState} from 'react';

import EventMapHeader from '../components/EventMapHeader/EventMapHeader';
import Sidebar from '../components/Sidebar/Sidebar';
import YandexMapAll from '../components/YandexMapAll/YandexMapAll';
import { YMapType } from '../components/types/ymap';

const EventsMap = () => {
  const [ymap, setYmap] = useState<YMapType>(null);
  return (
    <>
    <EventMapHeader />
    <div className='events-map'>
      {/* <YandexMapAll ymap={ymap} setYMap={setYmap} /> */}
      {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} cities={allCities} isLoading={loading} /> */}
      
    </div>      
    </>

  )
}

export default EventsMap