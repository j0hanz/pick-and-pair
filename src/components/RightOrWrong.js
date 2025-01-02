import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.css';

function RightOrWrong({
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

  const feedbackMessage = status === 'right' ? rightMessage : wrongMessage;

  return (
    <div
      className={`
        ${styles.feedback}
        ${visible ? styles.visible : ''}
        ${status === 'right' ? styles.right : styles.wrong}
      `}
      role="alert"
      aria-live="polite"
    >
      {feedbackMessage}
    </div>
  );
}

RightOrWrong.propTypes = {
  status: PropTypes.oneOf(['right', 'wrong', null]),
  rightMessage: PropTypes.string,
  wrongMessage: PropTypes.string,
  displayTime: PropTypes.number,
};

export default RightOrWrong;
