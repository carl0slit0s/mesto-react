import React from 'react';

export default function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
}) {

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div
      className={`popup popup_terget_${name} ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className='popup__conteiner'>
        <form onSubmit={handleSubmit} action='#' name={name} className='form'>
          <h2 className='form__title'>{title}</h2>
          {children}
        </form>

        <button
          onClick={onClose}
          type='button'
          className='popup__close-icon'
        ></button>
      </div>
    </div>
  );
}
