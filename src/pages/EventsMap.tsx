import React from 'react';

import EventMapHeader from '../components/EventMapHeader/EventMapHeader';
import Sidebar from '../components/Sidebar/Sidebar';


const EventsMap = () => {
  return (
    <>
    <EventMapHeader />
    <div className='events-map'>
      
      {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} cities={allCities} isLoading={loading} /> */}
      
    </div>      
    </>

  )
}

export default EventsMap