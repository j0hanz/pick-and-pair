import React from 'react';
import { HiStar } from 'react-icons/hi';
import style from './styles/Score.module.css';

export default function Score({ moves, completedTime }) {
  // Helper function to compute the star rating
  function getStars(m, t) {
    if (t > 60) return 1;
    if (m <= 6) return 5;
    if (m <= 7) return 4;
    if (m <= 8) return 3;
    if (m <= 9) return 2;
    return 1;
  }

  const stars = getStars(moves, completedTime);

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <HiStar
          key={index}
          className={
            index < stars
              ? style.scoreIcon
              : `${style.scoreIcon} ${style.grayedOut}`
          }
        />
      ))}
    </>
  );
}
