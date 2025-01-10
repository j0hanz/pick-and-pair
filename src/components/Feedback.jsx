import React from 'react';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import styles from './styles/Feedback.module.css';

// Display feedback messages based on the message prop
const Feedback = ({ message }) => {
  if (!message) return null;

  return (
    <>
      {message === 'success' ? (
        <HiCheck className={styles.success} />
      ) : (
        <HiXMark className={styles.error} />
      )}
    </>
  );
};

export default Feedback;
