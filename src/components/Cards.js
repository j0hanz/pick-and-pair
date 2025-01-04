import React from 'react';
import Card from './Card';
import { Row, Col } from 'react-bootstrap';
import Score from './Score';
import Timer from './Timer';
import styles from '../App.module.css';

export default function Cards({
  cards,
  isInitialFlip,
  handleCardSelection,
  matchedPairs,
  initialTime,
  onTimeUp,
}) {
  return (
    <Row className="d-flex justify-content-between" noGutters={true}>
      <div className={styles.stats}>
        <Score matchedPairs={matchedPairs} />
        <Timer initialTime={initialTime} onTimeUp={onTimeUp} />
      </div>
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
