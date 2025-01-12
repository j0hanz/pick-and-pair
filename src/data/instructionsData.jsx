import React from 'react';
import { Modal, ListGroup, Tab, Tabs } from 'react-bootstrap';
import {
  HiOutlineInformationCircle,
  HiOutlineClock,
  HiXMark,
  HiCheck,
  HiArrowPath,
  HiStar,
  HiOutlineArrowRightOnRectangle,
} from 'react-icons/hi2';
import styles from '../components/styles/Modal.module.css';

// This renders the instructions for the game
export default function InstructionsData() {
  return (
    <Modal.Body className="p-0">
      <Tabs defaultActiveKey="gameplay" className="mb-3" justify>
        <Tab eventKey="info" title="Info">
          <ListGroup variant="flush">
            <ListGroup.Item>
              Welcome to the memory game! Match all pairs of cards. At the
              start, cards briefly reveal themselves. Memorize their positions.
              The game has 6 pairs (12 cards).
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Test your memory and concentration. Pair all matching cards and
              aim for a perfect score.
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="gameplay" title="Gameplay">
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiArrowPath className={styles.listIcon} />
            </ListGroup.Item>
            <ListGroup.Item>Restart game</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineArrowRightOnRectangle className={styles.listIcon} />
            </ListGroup.Item>
            <ListGroup.Item>Exit game</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineClock
                className={`${styles.listIcon} ${styles.clockIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Game time</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiXMark className={`${styles.listIcon} ${styles.statsIcon}`} />
            </ListGroup.Item>
            <ListGroup.Item>Wrong moves</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiCheck className={`${styles.listIcon} ${styles.success}`} />
            </ListGroup.Item>
            <ListGroup.Item>Correct moves</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>Stars earned</ListGroup.Item>
          </ListGroup>
          <hr />
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineInformationCircle className={styles.listIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Your performance is rated based on time and number of moves made.
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="scoring" title="Scoring">
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 10 moves or more.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 9 moves.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 8 moves.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 7 move.
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
              <HiStar className={styles.scoreIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              Complete within 60 seconds with 6 moves.
            </ListGroup.Item>
          </ListGroup>
        </Tab>
      </Tabs>
    </Modal.Body>
  );
}
