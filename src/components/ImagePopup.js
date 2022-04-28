import React from 'react';

export default function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_terget_add-photo ${card ? 'popup_opened' : ''}`}>
      <div className='popup__conteiner popup__conteiner_type_photo'>
        <figure className='photo-popup'>
          <img src={card.link} alt={card.name} className='photo-popup__photo' />
          <figcaption className='photo-popup__title'>{card.name}</figcaption>
        </figure>

        <button onClick={onClose} type='button' className='popup__close-icon'></button>
      </div>
    </div>
  );
}
