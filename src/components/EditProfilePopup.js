import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about)
  }, [currentUser]);

  function handleChacgeName(e) {
    setName(e.target.value);
  }

  function handleChacgeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description
    })
  }

  return (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'redactor-profile'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      
    >
      <label className='form__field'>
        <input
          onChange={handleChacgeName}
          type='text'
          name='name'
          id='name'
          className='form__input form__input_field_name'
          placeholder='введите имя'
          required
          defaultValue={name}
          // minlength={2}
          // maxlength={40}
        />
        <span className='form__input-error name-error'></span>
      </label>

      <label className='form__field'>
        <input
          onChange={handleChacgeDescription}
          type='text'
          name='about'
          id='about'
          className='form__input form__input_field_about'
          placeholder='о себе'
          required
          defaultValue={description}
          // minlength={2}
          // maxlength={200}
        />
        <span className='form__input-error about-error'></span>
      </label>

      <button className='form__submit' type='submit'>
        Сохранить
      </button>
    </PopupWithForm>
  );
}
