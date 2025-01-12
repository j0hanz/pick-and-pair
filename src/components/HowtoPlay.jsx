import React from 'react';
import { Modal, Button, ListGroup, Tab, Tabs, Figure } from 'react-bootstrap';
import {
  HiOutlineInformationCircle,
  HiOutlineClock,
  HiXMark,
  HiCheck,
  HiArrowPath,
  HiStar,
} from 'react-icons/hi2';
import styles from './styles/Modal.module.css';
import gameGif from '../assets/img/how-to-play.gif';

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
        <Tab eventKey="gameplay" title="Gameplay">
          <ListGroup as="ol" numbered>
            <ListGroup.Item>
              Match all pairs of cards to win the game.
            </ListGroup.Item>
            <ListGroup.Item>
              All cards will reveal their images for 3 seconds at the start of
              the game.
            </ListGroup.Item>
            <ListGroup.Item>
              The game consists of 6 pairs of cards, totaling 12 cards.
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-1 me-auto">
                <div className="fw-bold">Gameplay</div>
                <ListGroup variant="flush" className="mb-0 mt-1">
                  <ListGroup.Item>
                    <HiCheck
                      className={`${styles.listIcon} me-1 ${styles.success}`}
                    />
                    Match pairs will highlight as completed.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <HiXMark
                      className={`${styles.listIcon} me-1 ${styles.statsIcon}`}
                    />
                    Wrong matches will flip cards back to hidden.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <HiOutlineClock
                      className={`${styles.listIcon} me-1 ${styles.clockIcon}`}
                    />
                    Fewer moves = better score.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <HiStar
                      className={`${styles.listIcon} me-1 ${styles.scoreIcon}`}
                    />
                    Faster completion time = higher rating.
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Additional Tips</div>
                <ListGroup variant="flush" className="mb-0 mt-1">
                  <ListGroup.Item>
                    Time tracking to challenge your speed.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Scoring system rewarding accuracy and efficiency.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Memorize card positions during the initial reveal.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Plan your moves strategically to minimize errors.
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </ListGroup.Item>
          </ListGroup>
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

        <Tab eventKey="symbols" title="Symbols">
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiArrowPath className={`${styles.listIcon} me-1`} />
            </ListGroup.Item>
            <ListGroup.Item>Restart the game</ListGroup.Item>
          </ListGroup>
          <hr />
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineClock
                className={`${styles.listIcon} me-1 ${styles.clockIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Show current game time</ListGroup.Item>
          </ListGroup>
          <hr />
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiXMark
                className={`${styles.listIcon} me-1 ${styles.statsIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Show failed attempts</ListGroup.Item>
          </ListGroup>
          <hr />
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiCheck
                className={`${styles.listIcon} me-1 ${styles.success}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Show correct matches</ListGroup.Item>
          </ListGroup>
          <hr />
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiStar
                className={`${styles.listIcon} me-1 ${styles.scoreIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Stars earned</ListGroup.Item>
          </ListGroup>
          <hr />
        </Tab>
        <Tab eventKey="info" title="Info">
          <ListGroup horizontal>
            <ListGroup.Item>
              <Figure>
                <Figure.Image
                  src={gameGif}
                  alt="How to play"
                  className="rounded"
                />
                <Figure.Caption>
                  Test your memory and concentration by pairing all the matching
                  cards. Sharpen your mind as you race against time and aim for
                  a perfect score. Good luck and have fun!
                </Figure.Caption>
              </Figure>
            </ListGroup.Item>
          </ListGroup>
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
