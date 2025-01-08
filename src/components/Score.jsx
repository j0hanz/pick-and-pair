import React from 'react';
import { HiOutlineStar } from 'react-icons/hi2';

export default function Score({ matchedPairs }) {
  const safePairs = Math.max(0, matchedPairs);
  return (
    <div>
      <HiOutlineStar className="me-1" /> {safePairs}
    </div>
  );
}
