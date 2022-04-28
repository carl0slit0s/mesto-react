import React from 'react';

export default function ChildrenPopupEditProfile() {
  return (
    <>
      <label className='form__field'>
        <input
          type='text'
          name='name'
          id='name'
          className='form__input form__input_field_name'
          placeholder='введите имя'
          required
          // minlength={2}
          // maxlength={40}
        />
        <span className='form__input-error name-error'></span>
      </label>

      <label className='form__field'>
        <input
          type='text'
          name='about'
          id='about'
          className='form__input form__input_field_about'
          placeholder='о себе'
          required
          // minlength={2}
          // maxlength={200}
        />
        <span className='form__input-error about-error'></span>
      </label>

      <button className='form__submit' type='submit'>
        Сохранить
      </button>
    </>
  );
}
