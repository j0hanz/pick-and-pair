import React from 'react';
import { TbStar } from 'react-icons/tb';

export default function Score({ matchedPairs }) {
  const safePairs = Math.max(0, matchedPairs);
  return (
    <div>
      <TbStar /> {safePairs}
    </div>
  );
}
