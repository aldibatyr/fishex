import React from 'react';
import './index.scss'

const Contacts = () => {
  return <div className='contacts'>
    <div className='contacts-wrapper'>
      <div className='main-title'>Контакты</div>
      <div className='info'>
        <div className='item'>
          <div className='title'>Адрес:</div>
          <div className='text'>г. Алматы, ул. Жарокова, 272Б</div>
        </div>
        <div className='item'>
          <div className='title'>Телефон:</div>
          <div className='text'>+7 727 355 15 26</div>
        </div>
        <div className='item'>
          <div className='title'>Моб.:</div>
          <div className='text'>+7 701 996 08 56</div>
        </div>
        <div className='item'>
          <div className='title'>Почта:</div>
          <div className='text'>sales@fishprodex.kz</div>
        </div>
        <div className='item'>
          <div className='title'>Режим работы:</div>
          <div className='text'>Пн—пт с 8:30—17:30</div>
        </div>
      </div>
    </div>
    <div className='map'>
      <iframe
        title='gmaps'
        // src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1454.0761675850754!2d76.9047241!3d43.2062941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368c7032aea01%3A0xcdf9596c39a4561!2z0KDRi9Cx0L_RgNC-0Lw!5e0!3m2!1sru!2skz!4v1681666139864!5m2!1sru!2skz'
        src='https://yandex.ru/map-widget/v1/?um=constructor%3Ad74b5a86b62b165cdee861c5a873eecee0cc21810cc8f66d4f95f02753acb85a&amp;source=constructor'
        frameBorder='0'
        allowFullScreen=''
        aria-hidden='false'
        tabIndex='0'
      ></iframe>
    </div>
  </div>;
};

export default Contacts;