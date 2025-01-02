import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.css';

const RightOrWrong = memo(
  ({ status, rightMessage = 'Correct!', wrongMessage = 'Try Again!' }) => {
    if (!status) return null;

    const message = status === 'right' ? rightMessage : wrongMessage;
    const className = `${styles.feedback} ${styles.visible} ${
      status === 'right' ? styles.right : styles.wrong
    }`;

    return (
      <div className={className} role="alert" aria-live="assertive">
        {message}
      </div>
    );
  }
);

RightOrWrong.propTypes = {
  status: PropTypes.oneOf(['right', 'wrong', null]),
  rightMessage: PropTypes.string,
  wrongMessage: PropTypes.string,
};

RightOrWrong.displayName = 'RightOrWrong';
export default RightOrWrong;
