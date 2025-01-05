import React from 'react';
import { TbClock } from 'react-icons/tb';
import { useCountdown } from '../hooks/useCountdown';

export default function Timer({ initialTime, onTimeUp }) {
  // Use the useCountdown hook to get the remaining time
  const remainingTime = useCountdown(initialTime, onTimeUp);

  return (
    <div>
      <TbClock /> {remainingTime}
    </div>
  );
}
