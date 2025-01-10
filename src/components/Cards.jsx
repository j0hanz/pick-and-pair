import React from 'react';
import Card from './Card';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { HiArrowPath } from 'react-icons/hi2';
import Timer from './Timer';
import WrongMoves from './WrongMoves';
import Feedback from './Feedback';
import styles from './styles/Cards.module.css';

export default function Cards({
  cards,
  isInitialFlip,
  handleCardSelection,
  moves,
  onReset,
  timerActive,
  feedback,
}) {
  return (
    <Container className={styles.container}>
      <Row className={styles.row}>
        <div className={`${styles.statsTop} py-1`}>
          <Timer timerActive={timerActive} />
          <WrongMoves moves={moves} />
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
        <div className={styles.statsBottom}>
          <Feedback message={feedback} />
        </div>
      </Row>
    </Container>
  );
}
