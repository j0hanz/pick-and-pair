import React from 'react';
import { HiStar } from 'react-icons/hi2';
import style from './styles/Score.module.css';

export default function Score({ moves, completedTime }) {
  let stars = 1;

  if (completedTime <= 60) {
    if (moves === 0) {
      stars = 5;
    } else if (moves === 1) {
      stars = 4;
    } else if (moves === 2) {
      stars = 3;
    } else if (moves === 3) {
      stars = 2;
    }
  }

  return (
    <div>
      {Array.from({ length: stars }, (_, index) => (
        <HiStar key={index} className={style.scoreIcon} />
      ))}
    </div>
  );
}
