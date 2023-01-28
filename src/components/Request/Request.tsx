import React from 'react';

import profilePicture from '../../assets/images/stanislav-profile-img.png';

const Request = () => {
  return (
    <div className="request">
      <div className="request-state blue">
        <p>новая</p>
      </div>
      <div className="request-top">
        <img className='request-profile__img' src={profilePicture} alt="profile-pic" />
        <div className="request-text">
          <h3 className="request-title">Станислав Старовойтов</h3>
          <p className="request-location">Санкт-Петербург, Россия</p>
        </div>
      </div>
      <div className="request-bottom">
        <p className="request-description">
          Опушкинская археологическая экспедиция в Крыму: сезон-2020
        </p>
      </div>
    </div>
  );
};

export default Request;
