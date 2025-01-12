import React from 'react';
import { Modal, Button, ListGroup, Tab, Tabs } from 'react-bootstrap';
import {
  HiOutlineInformationCircle,
  HiOutlineClock,
  HiXMark,
  HiCheck,
  HiArrowPath,
  HiStar,
} from 'react-icons/hi2';
import styles from './styles/Modal.module.css';

// Header with title and close button
function ModalHeader({ title = 'How to Play' }) {
  return (
    <Modal.Header className="border-0 d-flex flex-column align-items-center">
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
  );
}

// Body with how-to-play content
function ModalBody() {
  return (
    <Modal.Body className="p-0">
      <Tabs defaultActiveKey="info" className="mb-3" justify>
        <Tab eventKey="info" title="Info">
          <p>
            Welcome to the memory game! The objective is to match all pairs of
            cards. At the start of each game, the cards will briefly reveal
            themselves. Use this time to memorize their positions. Each game
            consists of 6 matching pairs (12 cards in total).
          </p>
          <p>
            Test your memory and concentration by pairing all matching cards.
            Sharpen your mind, race against time, and aim for a perfect score.
            Good luck and have fun!
          </p>
        </Tab>
        <Tab eventKey="gameplay" title="Gameplay">
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiArrowPath className={`${styles.listIcon} me-1`} />
            </ListGroup.Item>
            <ListGroup.Item>Restart the game</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineClock
                className={`${styles.listIcon} me-1 ${styles.clockIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Show game time</ListGroup.Item>
          </ListGroup>
          Fewer moves and faster completion lead to better ratings.
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiXMark
                className={`${styles.listIcon} me-1 ${styles.statsIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Wrong moves</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiCheck
                className={`${styles.listIcon} me-1 ${styles.success}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Correct moves</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiStar
                className={`${styles.listIcon} me-1 ${styles.scoreIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Stars earned</ListGroup.Item>
          </ListGroup>
          Your performance is rated based on the time taken and the number of
          moves made. Aim for a higher score by completing the game quickly and
          with fewer moves.
        </Tab>
        <Tab eventKey="scoring" title="Scoring">
          <ListGroup.Item>
            <ListGroup variant="flush" className="mb-0 mt-1">
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                5 stars: Complete within 60 seconds with 0 moves.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                4 stars: Complete within 60 seconds with 1 move.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                3 stars: Complete within 60 seconds with 2 moves.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                2 stars: Complete within 60 seconds with 3 moves.
              </ListGroup.Item>
              <ListGroup.Item>
                <HiStar
                  className={`${styles.listIcon} me-1 ${styles.scoreIcon} me-2`}
                />
                1 star: Complete within 60 seconds with 4 or more moves.
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </Tab>
      </Tabs>
    </Modal.Body>
  );
}

// Footer with close button
function ModalFooter({ onClose }) {
  return (
    <Modal.Footer className="border-0">
      <Button className={styles.btnClose} onClick={onClose}>
        <HiOutlineInformationCircle className={`${styles.btnIcon} me-1`} />
        Close
      </Button>
    </Modal.Footer>
  );
}

// Main modal component
export default function HowtoPlay({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered className={styles.modal}>
      <ModalHeader />
      <ModalBody />
      <ModalFooter onClose={onClose} />
    </Modal>
  );
}
