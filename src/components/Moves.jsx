import React from 'react';
import { TbArrowRight } from 'react-icons/tb';

export default function Moves({ moves }) {
  return (
    <div>
      <TbArrowRight /> {moves}
    </div>
  );
}
