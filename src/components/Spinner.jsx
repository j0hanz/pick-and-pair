import React from 'react';
import styles from './styles/Spinner.module.css';

const LoadingSpinner = ({ isLoading }) => (
  <div
    className={`${styles.spinnerContainer} ${!isLoading ? styles.hidden : ''}`}
  >
    <div className={styles.loader}></div>
  </div>
);

export default LoadingSpinner;
