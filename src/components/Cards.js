import React from 'react';
import Card from './Card';
import { Row, Col } from 'react-bootstrap';
import styles from '../App.module.css';

export default function Cards({ cards, isInitialFlip, handleCardSelection }) {
  return (
    <Row className={styles.row}>
      {cards.map((card, index) => (
        <Col xs={2} key={index}>
          <Card
            card={card}
            index={index}
            clickHandler={isInitialFlip ? undefined : handleCardSelection}
          />
        </Col>
      ))}
    </Row>
  );
}
