import React from 'react';
import styles from '../App.module.css';

export default function Card({ card, index, clickHandler }) {
  const cardClassName = card.status ? 'active' : '';

  return (
    <div
      className={`${styles.card} ${cardClassName}`}
      onClick={() => clickHandler(index)}
    >
      <img
        src={card.img}
        alt={card.name}
        className="img-fluid"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
