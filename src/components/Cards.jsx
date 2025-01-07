import React from 'react';
import Card from './Card';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { HiArrowPath } from 'react-icons/hi2';
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
  onReset,
}) {
  return (
    <Container className={styles.container}>
      <Row className={styles.row}>
        <div className={`${styles.stats} px-2 py-1`}>
          <Timer initialTime={initialTime} onTimeUp={onTimeUp} />
          <Moves moves={moves} />
          <Button className={styles.resetButton} onClick={onReset}>
            <HiArrowPath className={styles.resetIcon} />
          </Button>
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
