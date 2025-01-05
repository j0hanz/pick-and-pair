import React, { memo, useState } from 'react';
import { Image } from 'react-bootstrap';
import { LuBrain } from 'react-icons/lu';
import styles from './styles/Card.module.css';

// Get CSS class for card based on status and image load state
function computeCardClassName(cardStatus, imageLoaded) {
  let className = styles.card;

  if (cardStatus) {
    className += ` ${styles.active}`;
  }
  if (cardStatus === 'active matched') {
    className += ` ${styles.matched}`;
  }
  if (!imageLoaded) {
    className += ` ${styles.loading}`;
  }

  return className;
}

const Card = memo(({ card, index, clickHandler }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle card click if image is loaded and clickHandler exists
  const handleClick = () => {
    if (!imageLoaded || !clickHandler) return;

    console.log('Card clicked at index:', index);
    clickHandler(index);
  };

  return (
    <div
      className={computeCardClassName(card.status, imageLoaded)}
      onClick={handleClick}
      role="button"
      aria-label={`Card ${card.name}`}
    >
      <div className={styles.back}>
        <LuBrain />
      </div>

      <Image
        src={card.img}
        alt={card.name}
        className={styles.img}
        onLoad={() => {
          console.log('Image loaded for card:', card.name);
          setImageLoaded(true);
        }}
        loading="lazy"
        fluid
      />

      {!imageLoaded && <div className={styles.loader} />}
    </div>
  );
});

Card.displayName = 'Card';
export default Card;
