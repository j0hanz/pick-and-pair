import React from 'react';
import Card from './Card';
import { Row, Col } from 'react-bootstrap';
import Score from './Score';
import Timer from './Timer';
import Attempts from './Attempts';
import styles from '../App.module.css';

export default function Cards({
  cards,
  isInitialFlip,
  handleCardSelection,
  matchedPairs,
  initialTime,
  onTimeUp,
  attempts,
}) {
  return (
    <Row className={styles.row}>
      <div className={styles.stats}>
        <Score matchedPairs={matchedPairs} />
        <Timer initialTime={initialTime} onTimeUp={onTimeUp} />
        <Attempts attempts={attempts} />
      </div>
      {cards.map((card, index) => (
        <Col xs={4} sm={4} md={3} lg={2} xl={2} key={index}>
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
