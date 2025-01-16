import React, { memo, useState } from 'react';
import { Image, Card as GameCard } from 'react-bootstrap';
import styles from './styles/Card.module.css';

const Card = memo(({ card, index, clickHandler }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle card click
  const handleClick = () => {
    if (imageLoaded && clickHandler) {
      clickHandler(index);
    }
  };

  return (
    <GameCard
      className={`${styles.card} ${card.status ? styles.active : ''} ${card.status === 'active matched' ? styles.matched : ''} ${!imageLoaded ? styles.loading : ''}`}
      onClick={handleClick}
      role="button"
      aria-label={`Card ${card.name}`}
    >
      <GameCard.Body>
        <div className={styles.back}></div>
        <Image
          src={card.img}
          alt={card.name}
          className={styles.img}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          fluid
        />
        {!imageLoaded && <div className={styles.loader} />}
      </GameCard.Body>
    </GameCard>
  );
});

Card.displayName = 'Card';
export default Card;
