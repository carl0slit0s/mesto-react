import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef()
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value)
  }

  return (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'change-avatar'}
      isOpen={isOpen}
      // children={<ChildrenPopupChangeAvatar />}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className='form__field'>
        <input
          ref={avatarRef}
          type='url'
          name='avatar'
          id='avatar'
          className='form__input form__input_avatar_link'
          placeholder='Ссылка на аватар'
          required
        />
        <span className='form__input-error avatar-error'></span>
      </label>

      <button className='form__submit' type='submit'>
        Сохранить
      </button>
    </PopupWithForm>
  );
}
