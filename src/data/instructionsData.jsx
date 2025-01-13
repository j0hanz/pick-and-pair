import React from 'react';
import { Modal, ListGroup, Tab, Tabs, Badge, Row, Col } from 'react-bootstrap';
import {
  HiOutlineInformationCircle,
  HiOutlineClock,
  HiXMark,
  HiCheck,
  HiArrowPath,
  HiStar,
  HiOutlineArrowRightOnRectangle,
  HiOutlineArrowPathRoundedSquare,
} from 'react-icons/hi2';
import { LiaInfinitySolid } from 'react-icons/lia';
import styles from '../components/styles/Modal.module.css';

// This renders the instructions for the game
export default function InstructionsData() {
  return (
    <Modal.Body className="p-0">
      <Tabs defaultActiveKey="gameplay" className="mb-3" justify>
        <Tab eventKey="info" title="Info">
          <ListGroup variant="flush">
            <ListGroup.Item>
              Welcome to Pick & Pair memory game! Your goal is to match all
              pairs of cards. When the game starts, all cards will briefly
              reveal themselves for 3 seconds before flipping back over.
              Memorize their positions during this time. The game consists of 6
              pairs of cards (12 cards in total).
            </ListGroup.Item>
          </ListGroup>
          <hr className="my-2" />
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiOutlineInformationCircle className={styles.listIcon} />
            </ListGroup.Item>
            <ListGroup.Item>
              The game rates your performance based on the number of moves and
              time taken to complete the game. Details are available in the
              Scoring tab.
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
              <HiOutlineArrowPathRoundedSquare
                className={`${styles.listIcon} ${styles.statsIcon}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Moves</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiXMark className={`${styles.listIcon} ${styles.wrongPick}`} />
            </ListGroup.Item>
            <ListGroup.Item>Wrong pick</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiCheck className={`${styles.listIcon} ${styles.success}`} />
            </ListGroup.Item>
            <ListGroup.Item>Correct pick</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
            </ListGroup.Item>
            <ListGroup.Item>Stars earned</ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="scoring" title="Scoring">
          <Row className="d-flex justify-content-between px-3 align-items-center">
            <Col className="text-start">
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
            </Col>
            <Col className="text-center">
              <HiOutlineArrowPathRoundedSquare
                className={`${styles.scoreListIcon} ${styles.statsIcon} me-1`}
              />
              10
            </Col>
            <Col className="text-end">
              <Badge>
                <HiOutlineClock
                  className={`${styles.scoreListIcon} ${styles.clockIcon} me-1`}
                />
                <LiaInfinitySolid className={styles.scoreListIcon} />
              </Badge>
            </Col>
          </Row>
          <hr className="my-2" />
          <Row className="d-flex justify-content-between px-3 align-items-center">
            <Col className="text-start">
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
            </Col>
            <Col className="text-center">
              <HiOutlineArrowPathRoundedSquare
                className={`${styles.scoreListIcon} ${styles.statsIcon} me-1`}
              />
              9
            </Col>
            <Col className="text-end">
              <Badge>
                <HiOutlineClock
                  className={`${styles.scoreListIcon} ${styles.clockIcon} me-1`}
                />
                60s
              </Badge>
            </Col>
          </Row>
          <hr className="my-2" />
          <Row className="d-flex justify-content-between px-3 align-items-center">
            <Col className="text-start">
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
            </Col>
            <Col className="text-center">
              <HiOutlineArrowPathRoundedSquare
                className={`${styles.scoreListIcon} ${styles.statsIcon} me-1`}
              />
              8
            </Col>
            <Col className="text-end">
              <Badge>
                <HiOutlineClock
                  className={`${styles.scoreListIcon} ${styles.clockIcon} me-1`}
                />
                60s
              </Badge>
            </Col>
          </Row>
          <hr className="my-2" />
          <Row className="d-flex justify-content-between px-3 align-items-center">
            <Col className="text-start">
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.grayedOut}`} />
            </Col>
            <Col className="text-center">
              <HiOutlineArrowPathRoundedSquare
                className={`${styles.scoreListIcon} ${styles.statsIcon} me-1`}
              />
              7
            </Col>
            <Col className="text-end">
              <Badge>
                <HiOutlineClock
                  className={`${styles.scoreListIcon} ${styles.clockIcon} me-1`}
                />
                60s
              </Badge>
            </Col>
          </Row>
          <hr className="my-2" />
          <Row className="d-flex justify-content-between px-3 align-items-center">
            <Col className="text-start">
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
              <HiStar className={`${styles.scoreIcon} ${styles.starIcon}`} />
            </Col>
            <Col className="text-center">
              <HiOutlineArrowPathRoundedSquare
                className={`${styles.scoreListIcon} ${styles.statsIcon} me-1`}
              />
              6
            </Col>
            <Col className="text-end">
              <Badge>
                <HiOutlineClock
                  className={`${styles.scoreListIcon} ${styles.clockIcon} me-1`}
                />
                60s
              </Badge>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Modal.Body>
  );
}
