import React from 'react';
import Card from './Card';
import { Row, Col, Container } from 'react-bootstrap';
import Score from './Score';
import Timer from './Timer';
import Moves from './Moves';
import styles from './styles/Cards.module.css';

export default function Cards({
  cards,
  isInitialFlip,
  handleCardSelection,
  matchedPairs,
  initialTime,
  onTimeUp,
  moves,
}) {
  return (
    <Container className={styles.container}>
      <Row className={styles.row}>
        <div className={`${styles.stats} p-2`}>
          <Score matchedPairs={matchedPairs} />
          <Timer initialTime={initialTime} onTimeUp={onTimeUp} />
          <Moves moves={moves} />
        </div>
        {cards.map((card, index) => (
          <Col xs={4} sm={4} md={3} lg={3} xl={3} key={index}>
            <Card
              card={card}
              index={index}
              clickHandler={isInitialFlip ? undefined : handleCardSelection}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
