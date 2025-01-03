import React, { memo, useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from './styles/Card.module.css';

const Card = memo(({ card, index, clickHandler }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getCardClassName = () => {
    let className = styles.card;
    if (card.status) className += ` ${styles.active}`;
    if (card.status === 'active matched') className += ` ${styles.matched}`;
    if (!imageLoaded) className += ` ${styles.loading}`;
    return className;
  };

  return (
    <div
      className={getCardClassName()}
      onClick={() => imageLoaded && clickHandler(index)}
      role="button"
      aria-label={`Card ${card.name}`}
    >
      <Image
        src={card.img}
        alt={card.name}
        className={styles.img}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        fluid
      />
      {!imageLoaded && <div className={styles.loader}></div>}
    </div>
  );
});

Card.displayName = 'Card';
export default Card;
