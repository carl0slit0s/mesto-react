import React from "react";

export default function ChildrenPopupChangeAvatar() {
  return (
    <>
      <label className='form__field'>
              <input
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
    </>
  )
}