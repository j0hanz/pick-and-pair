import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './styles/Spinner.module.css';

const LoadingSpinner = ({ isLoading }) => (
  <div
    className={`${styles.spinnerContainer} ${!isLoading ? styles.hidden : ''}`}
  >
    <div className={styles.spinnerBox}>
      <Spinner animation="grow" role="status" className="mb-2"></Spinner>
      <span className="opacity-75">Starting</span>
    </div>
  </div>
);

export default LoadingSpinner;
