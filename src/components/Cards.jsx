import React from 'react';
import Card from './Card';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { HiArrowPath, HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import Timer from './Timer';
import Moves from './Moves';
import Feedback from './Feedback';
import styles from './styles/Cards.module.css';
import { handleButtonClick } from '../utils/soundManager';

// Render all cards
export default function Cards({
  cards,
  isInitialFlip,
  handleCardSelection,
  moves,
  onReset,
  onExit,
  timerActive,
  feedback,
}) {
  return (
    <Container>
      <Row className={styles.row}>
        <div className={styles.statsTop}>
          <Button
            className={styles.btnExitRestart}
            onClick={handleButtonClick(onReset)}
          >
            <HiArrowPath className={styles.exitRestartIcon} />
          </Button>
          <Timer timerActive={timerActive} />
          <Moves moves={moves} />
          <Button
            className={styles.btnExitRestart}
            onClick={handleButtonClick(onExit)}
          >
            <HiOutlineArrowRightOnRectangle
              className={styles.exitRestartIcon}
            />
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
          <Feedback message={feedback} />
        </div>
      </Row>
    </Container>
  );
}
