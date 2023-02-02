import React, { FC, useEffect, useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import Toggler from '../Toggler/Toggler';
import Sidebar from '../Sidebar/Sidebar';
import { requestGet } from '../../api/requests';

import { IAllPoints, ICurrentPoint } from '../types/points';

interface IEventsMapSidebar {
  points: Array<ICurrentPoint>;
}

const EventsMapSidebar: FC<IEventsMapSidebar> = ({points}) => {
  return (
    <div className="events-map-sidebar">
      <div className="events-map-sidebar-options">
        <div className="events-map-sidebar__navigation">
          <p className="variants">2 0597 вариантов</p>
          <div className="events-toggler">
            <Toggler name="name" />
            <p className="events-toggler-text">Показать прошедшие</p>
          </div>
        </div>
        <Dropdown
          options={[
            { value: 1, label: 'Сначала новые' },
            { value: 2, label: 'Сначала старые' },
          ]}
          name={'events'}
          id={'events'}
          className={'events-map-filtration'}
        />
      </div>
      <Sidebar cities={points} />
    </div>
  );
};

export default EventsMapSidebar;
