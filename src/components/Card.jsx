import React, { memo, useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from './styles/Card.module.css';
import cardBack from '../assets/img/card-back.gif';

const Card = memo(({ card, index, clickHandler }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle card click
  const handleClick = () => {
    if (imageLoaded && clickHandler) {
      clickHandler(index);
    }
  };

  return (
    <div
      className={`${styles.card} ${card.status ? styles.active : ''} ${card.status === 'active matched' ? styles.matched : ''} ${!imageLoaded ? styles.loading : ''}`}
      onClick={handleClick}
      role="button"
      aria-label={`Card ${card.name}`}
    >
      <div className={styles.back}>
        <Image src={cardBack} alt="Card Back" className={styles.img} />
      </div>
      <Image
        src={card.img}
        alt={card.name}
        className={styles.img}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        fluid
      />
      {!imageLoaded && <div className={styles.loader} />}
    </div>
  );
});

Card.displayName = 'Card';
export default Card;
