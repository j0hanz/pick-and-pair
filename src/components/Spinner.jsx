import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './styles/Spinner.module.css';

const LoadingSpinner = () => (
  <div className={styles.spinnerContainer}>
    <Spinner animation="border" role="status">
      <span className="sr-only"></span>
    </Spinner>
  </div>
);

export default LoadingSpinner;
