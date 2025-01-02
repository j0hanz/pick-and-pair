import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.css';

function RightOrWrong({
  status,
  rightMessage = 'Correct!',
  wrongMessage = 'Try Again!',
  translations = { correct: 'Correct!', wrong: 'Try Again!' },
}) {
  if (!status) return null;

  const message =
    status === 'right' ? translations.correct : translations.wrong;
  const className = `${styles.feedback} ${styles.visible} ${
    status === 'right' ? styles.right : styles.wrong
  }`;

  return (
    <div className={className} role="alert" aria-live="assertive">
      {message}
    </div>
  );
}

RightOrWrong.propTypes = {
  status: PropTypes.oneOf(['right', 'wrong', null]),
  rightMessage: PropTypes.string,
  wrongMessage: PropTypes.string,
  translations: PropTypes.shape({
    correct: PropTypes.string,
    wrong: PropTypes.string,
  }),
};

RightOrWrong.displayName = 'RightOrWrong';
export default RightOrWrong;
