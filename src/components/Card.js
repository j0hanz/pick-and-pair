import React, { memo, useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from './styles/Card.module.css';

const Card = memo(({ card, index, clickHandler }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardClassName = `${styles.card} ${card.status ? styles.active : ''} ${card.status === 'active matched' ? styles.matched : ''} ${!imageLoaded ? styles.loading : ''}`;

  return (
    <div
      className={cardClassName}
      onClick={() => imageLoaded && clickHandler(index)}
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
