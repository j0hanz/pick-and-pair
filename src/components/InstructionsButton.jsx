import React from 'react';
import { Button } from 'react-bootstrap';
import { handleButtonClick } from '../utils/soundManager';
import styles from '../styles/global/App.module.css';

export default function InstructionsButton({ onClick }) {
  return (
    <Button onClick={handleButtonClick(onClick)} className={styles.btnGuide}>
      Guide
    </Button>
  );
}
