import React from 'react';

import house from '../../assets/icons/home-icon.svg';
import globe from '../../assets/icons/globe-icon.svg';
import mail from '../../assets/icons/mail-load-icon.svg';
import calendar from '../../assets/icons/calendar-icon.svg';
import support from '../../assets/images/support-image.png';

const Navigation = () => {
  return (
    <nav className="navigation navigation-container">
      <ul className='navigation-wrapper'>
        <li>
          <img src={house} alt="house-icon" />
          <a className="active navigation-item link-white" href="?">
            Домой
          </a>
        </li>
        <li>
          <img src={globe} alt="globus-icon" />
          <a className="navigation-item link-white" href="#globe">Предложения</a>
        </li>
        <li>
          <svg
            className="mail-icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="mail-load-icon">
              <path
                id="body"
                d="M8.33334 14.1666H3.33334V35.8333H36.6667V14.1666H31.6667"
                stroke="#8494A1"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="mailGroup">
                <path
                  id="mail1"
                  d="M31.6663 18.7501L36.6663 15.0001M8.33301 18.7501L19.9997 27.5001L31.6663 18.7501H8.33301ZM8.33301 18.7501V5.00012H31.6663V18.7501H8.33301ZM8.33301 18.7501L3.33301 15.0001L8.33301 18.7501Z"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g id="arrowGroup">
                <path
                  id="arrow1"
                  d="M19.9997 20V10.8334M15.833 15.8334L19.9997 20L15.833 15.8334ZM19.9997 20L24.1663 15.8334L19.9997 20Z"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
          <a className="navigation-item link-white" href="#mail">
            Заявки
          </a>
        </li>
        <li>
          <svg
            className="calendar"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="calendar-icon">
              <path
                id="Vector"
                d="M35 3.33331H5.00001C4.07954 3.33331 3.33334 4.07951 3.33334 4.99998V35C3.33334 35.9205 4.07954 36.6666 5.00001 36.6666H35C35.9205 36.6666 36.6667 35.9205 36.6667 35V4.99998C36.6667 4.07951 35.9205 3.33331 35 3.33331Z"
                stroke="#8494A1"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M3.33334 11.6667H36.6667"
                stroke="#8494A1"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M36.6667 9.16669V19.1667"
                stroke="#8494A1"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="days3">
                <path
                  id="Vector_4"
                  d="M10 18.3333H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_5"
                  d="M18.3333 18.3333H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_6"
                  d="M26.6667 18.3333H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_7"
                  d="M10 24.1667H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_8"
                  d="M18.3333 24.1667H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_9"
                  d="M26.6667 24.1667H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_10"
                  d="M10 30H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_11"
                  d="M18.3333 30H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_12"
                  d="M26.6667 30H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g id="days2">
                <path
                  id="Vector_13"
                  d="M10 18.3333H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_14"
                  d="M18.3333 18.3333H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_15"
                  d="M26.6667 18.3333H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_16"
                  d="M10 24.1667H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_17"
                  d="M18.3333 24.1667H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_18"
                  d="M26.6667 24.1667H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_19"
                  d="M10 30H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_20"
                  d="M18.3333 30H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_21"
                  d="M26.6667 30H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g id="days">
                <path
                  id="Vector_22"
                  d="M10 18.3333H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_23"
                  d="M18.3333 18.3333H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_24"
                  d="M26.6667 18.3333H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_25"
                  d="M10 24.1667H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_26"
                  d="M18.3333 24.1667H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_27"
                  d="M26.6667 24.1667H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_28"
                  d="M10 30H13.3333"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_29"
                  d="M18.3333 30H21.6667"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_30"
                  d="M26.6667 30H30"
                  stroke="#8494A1"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <path
                id="Vector_31"
                d="M3.33334 9.16669V19.1667"
                stroke="#8494A1"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <a className="navigation-item link-white" href="#calendar">
            Календарь
          </a>
        </li>
      </ul>
      <div className='navigation-card'>
            <img src={support} alt="asd" />
            <h3 className='navigation-card-title'>Кристина</h3>
            <p className='navigation-card-desc'>Ваш персональный помощник по работе с системой</p>
            <button className='btn btn-outline-lightblue'>Написать</button>
            <div className='navigation-card-mail'>
                <p>E-mail</p><p className='mail'>support@goodsurfing.org</p>
            </div>
        
      </div>
    </nav>
  );
};

export default Navigation;
