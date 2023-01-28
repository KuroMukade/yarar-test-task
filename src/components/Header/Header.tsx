import React from 'react';

import Dropdown from '../Dropdown/Dropdown';

import logo from '../../assets/images/logo-full.png';
import volcano from '../../assets/images/volcans-img.png';
import profile from '../../assets/images/profile-img.png';
import dropdown from '../../assets/icons/dropdown-icon.svg';
import heart from '../../assets/icons/heart-icon.svg';
import mail from '../../assets/icons/mail-icon.svg';

const Header = () => {
  return (
    <header className="container">
      <div className="header-wrapper">
        <div className="header-logo">
          <img className="header-img" src={logo} alt="GoodSpring logo" />
        </div>
        {/* <div className="header-language">
          <p>RU</p>
          <img className="dropdown-icon" src={dropdown} alt="всплывающее меню" />
        </div> */}
          <Dropdown
            className="header-language"
            name="language"
            id="language"
            options={[
              { value: 1, label: 'RU' },
              { value: 2, label: 'ENG' },
            ]}
          />
        <div className="volcano">
          <a href="?">
            <img className="volcano-img" src={volcano} alt="volcano" />
          </a>
          <a className="link volcano-link" href="?">
            Природный парк "Вулканы Камчатки"
          </a>
        </div>
        <div className="additional">
          <a className="additional__link" href="?likes">
            <img src={heart} alt="heart link" />
          </a>
          <a className="additional__link" href="?mail">
            <img src={mail} alt="mail link" />
          </a>
        </div>
        <div className="profile">
          <p className="profile-name">Владислав</p>
          <img className="profile-icon" src={profile} alt="Изображение профиля" />
          <a href="?">
            <img src={dropdown} alt="всплывающее меню" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
