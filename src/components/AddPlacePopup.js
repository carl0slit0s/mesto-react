import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const cardLinkRef = React.useRef();
  const cardnameRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(cardnameRef.current.value, cardLinkRef.current.value)
    onAddPlace(cardnameRef.current.value, cardLinkRef.current.value)
    // onAddPlace;
  }

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'add-photo'}
      isOpen={isOpen}
      // children={<ChildrenPopupAddPhoto />}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='form__field'>
        <input
          ref={cardnameRef}
          type='text'
          name='place-name'
          id='place-name'
          className='form__input form__input_card_name'
          placeholder='Название'
          required
          // minlength={2}
          // maxlength={30}
        />
        <span className='form__input-error place-name-error'></span>
      </label>

      <label className='form__field'>
        <input
          ref={cardLinkRef}
          type='url'
          name='photo-link'
          id='photo-link'
          className='form__input form__input_card_link'
          placeholder='Ссылка на картинку'
          required
        />
        <span className='form__input-error photo-link-error'></span>
      </label>

      <button className='form__submit' type='submit'>
        Сохранить
      </button>
    </PopupWithForm>
  );
}
