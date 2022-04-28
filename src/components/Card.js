import React from 'react';

export default function Card({ card, onCardClick, onDeleteClick }) {
  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick(){
    onDeleteClick(card)
  }

  return (
    <article className='photo-card'>
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className='photo-card__photo'
      />
      <button onClick={handleDeleteClick} type='button' className='photo-card__delete'></button>
      <div className='photo-card__description'>
        <h2 className='photo-card__name'>{card.name}</h2>
        <div className='photo-card__like-info'>
          <button type='button' className='photo-card__like'></button>
          <p className='photo-card__like-count'>{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
