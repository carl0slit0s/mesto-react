import React from 'react';

export default function ChildrenPopupAddPhoto() {
  return (
    <>
      <label className='form__field'>
        <input
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
    </>
  );
}

// ChildrenPopupAddPhoto
