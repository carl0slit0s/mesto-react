import React, { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import Card from './Card.js';

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onDeleteClick,
}) {
  let [userAvatar, setUserAvatar] = useState('');
  let [userName, setUserName] = useState('');
  let [userDescription, setUserDescription] = useState('');
  let [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfileData().then((profile) => {
      setUserAvatar(profile.avatar);
      setUserName(profile.name);
      setUserDescription(profile.about);
    }).catch((err) => console.log(err));;
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((cardList) => {
        const formatedData = cardList.map((cardData) => ({
          name: cardData.name,
          link: cardData.link,
          likes: cardData.likes,
          _id: cardData._id,
          // ownerId: cardData.owner._id,
          // profileId: profileId,
        }));
        setCards(formatedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className='profile'>
        <div className='profile__overlay'>
          <img
            onClick={onEditAvatar}
            src={userAvatar}
            alt='аватар автора'
            className='profile__avatar'
          />
        </div>

        <div className='profile__info'>
          <h1 className='profile__name'>{userName}</h1>
          <p className='profile__about'>{userDescription}</p>
          <button
            onClick={onEditProfile}
            type='button'
            className='profile__edit'
          ></button>
        </div>

        <button
          onClick={onAddPlace}
          type='button'
          className='profile__add-button'
        ></button>
      </section>

      <section className='gallery'>
        {cards.map((card) => (
          <Card
            onCardClick={onCardClick}
            card={card}
            key={card._id}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}
