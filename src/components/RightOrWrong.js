import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.css';

export default function RightOrWrong({
  status,
  rightMessage = 'Correct!',
  wrongMessage = 'Try Again!',
  displayTime = 1500,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status !== null) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), displayTime);
      return () => clearTimeout(timer);
    }
  }, [status, displayTime]);

  return (
    <div
      className={`${styles.feedback} ${visible ? styles.visible : ''} ${
        status === 'right' ? styles.right : styles.wrong
      }`}
      role="alert"
      aria-live="polite"
    >
      {status === 'right' ? rightMessage : wrongMessage}
    </div>
  );
}

RightOrWrong.propTypes = {
  status: PropTypes.oneOf(['right', 'wrong', null]),
  rightMessage: PropTypes.string,
  wrongMessage: PropTypes.string,
  displayTime: PropTypes.number,
};
