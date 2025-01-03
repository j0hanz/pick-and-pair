import React, { memo, useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from './styles/Card.module.css';

const Card = memo(({ card, index, clickHandler }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const getCardClassName = () => {
    let className = styles.card;
    if (card.status) className += ` ${styles.active}`;
    if (card.status === 'active matched') className += ` ${styles.matched}`;
    if (!imageLoaded) className += ` ${styles.loading}`;
    if (flipped) className += ` ${styles.flip}`;
    return className;
  };

  const handleClick = () => {
    if (imageLoaded) {
      setFlipped(true);
      clickHandler(index);
    }
  };

  return (
    <div
      className={getCardClassName()}
      onClick={handleClick}
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
