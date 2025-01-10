import React from 'react';
import { IoMdCheckmarkCircle, IoMdCloseCircle } from 'react-icons/io';
import styles from './styles/Feedback.module.css';

// Display feedback messages based on the message prop
const Feedback = ({ message }) => {
  if (!message) return null;

  return (
    <div className={styles.feedback}>
      {message === 'success' ? (
        <>
          <IoMdCheckmarkCircle className={styles.success} />
          <IoMdCheckmarkCircle className={styles.success} />
        </>
      ) : (
        <>
          <IoMdCloseCircle className={styles.error} />
          <IoMdCloseCircle className={styles.error} />
        </>
      )}
    </div>
  );
};

export default Feedback;
