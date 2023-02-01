import React from 'react';

import Dropdown from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-full.png';

const EventMapHeader = () => {
  return (
    <div className="event-wrapper">
    <header className="container event-header">
      <div className="header-wrapper">
        <div className="header-logo">
          <img className="header-img" src={logo} alt="GoodSpring logo" />
        </div>
        <Dropdown
          className="header-language"
          name="event-language"
          id="event-language"
          options={[
            { value: 1, label: 'RU' },
            { value: 2, label: 'ENG' },
          ]}
        />
        <div className="event-header__navigation">
          <Link to={'/'} className="event-btn btn-blue">
            <span>Все предложения</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                stroke="white"
                stroke-width="2"
              />
              <path d="M11 11L16.6569 16.6569" stroke="white" stroke-width="2" />
            </svg>
          </Link>
          <Dropdown
            className="event-header__dropdown-society"
            name="event-language"
            id="event-language"
            options={[
              { value: 1, label: 'Сообщество' },
              { value: 2, label: 'Подробнее' },
            ]}
          />
          <Dropdown
            className="event-header__dropdown-project"
            name="event-language"
            id="event-language"
            options={[
              { value: 1, label: 'О проекте' },
              { value: 2, label: 'Справка' },
            ]}
          />
        </div>
        <div className="event-header__auth">
          <button className='event-header__auth-login'>Вход</button>
          <button className='btn-outline-lightblue event-header__auth-registration'>Логин</button>
        </div>
      </div>
    </header>      
    </div>

  );
};

export default EventMapHeader;
