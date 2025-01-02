import React, { memo, useState } from 'react';
import styles from '../App.module.css';

const Card = memo(({ card, index, clickHandler }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardClassName = `${styles.card} ${card.status ? styles.active : ''} ${!imageLoaded ? styles.loading : ''}`;

  return (
    <div
      className={cardClassName}
      onClick={() => imageLoaded && clickHandler(index)}
    >
      <img
        src={card.img}
        alt={card.name}
        className={`${styles.img} img-fluid`}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
      />
      {!imageLoaded && <div className={styles.loader}>Loading...</div>}
    </div>
  );
});

Card.displayName = 'Card';
export default Card;
