// import './App.css';
import '../index.css';
import './Header';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import ChildrenPopupEditProfile from './ChildrenPopupEditProfile';
import ChildrenPopupAddPhoto from './ChildrenPopupAddPhoto';
import ChildrenPopupChangeAvatar from './ChildrenPopupChangeAvatar';

import React, { useState } from 'react';
function App() {
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [isAcceptDeletePopupOpen, setIsAcceptDeletePopupOpen] = useState(false)
  let [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAcceptDelete = (card) => {
    setIsAcceptDeletePopupOpen(card)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAcceptDeletePopupOpen(false)
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className='content'>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onDeleteClick={handleAcceptDelete}
      />

      <Footer />

      <PopupWithForm
        title={'Редактировать профиль'}
        name={'redactor-profile'}
        isOpen={isEditProfilePopupOpen}
        children={<ChildrenPopupEditProfile />}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title={'Новое место'}
        name={'add-photo'}
        isOpen={isAddPlacePopupOpen}
        children={<ChildrenPopupAddPhoto />}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        title={'Обновить аватар'}
        name={'change-avatar'}
        isOpen={isEditAvatarPopupOpen}
        children={<ChildrenPopupChangeAvatar />}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title={'Вы уверенны?'}
        name={'delete-accept'}
        isOpen={isAcceptDeletePopupOpen}
        children={
          <button className='form__submit' type='submit'>
            Да
          </button>
        }
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </div>
  );
}

export default App;
