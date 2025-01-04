import React from 'react';
import Card from './Card';
import { Row, Col } from 'react-bootstrap';
import styles from '../App.module.css';

export default function Cards({ cards, isInitialFlip, handleCardSelection }) {
  return (
    <Row className={styles.row} noGutters>
      {cards.map((card, index) => (
        <Col xs={3} sm={3} md={3} lg={2} xl={2} key={index}>
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
