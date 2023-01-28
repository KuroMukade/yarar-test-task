import React from 'react';

const ProfileFill = () => {
  return (
    <div className="profile-fill">
      <div className="profile-fill__top">
        <h3>Заполненность профиля</h3>
      </div>
      <div className="profile-fill__bottom">
        <div className="profile-fill-description">
          <div className="profile-fill-tags">
            <div className="profile-fill-tags__tag">
              <div className="profile-fill-tags__circle"></div>
              <p className="profile-fill-tags__text">Описание</p>
            </div>
            <div className="profile-fill-tags__tag">
              <div className="profile-fill-tags__circle"></div>
              <p className="profile-fill-tags__text">Фотографии</p>
            </div>
            <div className="profile-fill-tags__tag">
              <div className="profile-fill-tags__circle"></div>
              <p className="profile-fill-tags__text">Видео</p>
            </div>
            <div className="profile-fill-tags__tag">
              <div className="profile-fill-tags__circle"></div>
              <p className="profile-fill-tags__text">Предложения</p>
            </div>
            <div className="profile-fill-tags__tag">
              <div className="profile-fill-tags__circle"></div>
              <p className="profile-fill-tags__text">Отзывы</p>
            </div>
          </div>
          <button className="btn btn-green">Редактировать профиль</button>
        </div>
        <div className="percent">
          <svg>
            <circle id="circle1" cx="55" cy="55" r="55"></circle>
            <circle id="circle1" cx="55" cy="55" r="55"></circle>
          </svg>
          <div className="number">
            <h2>
              70<span>%</span>
            </h2>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfileFill;
