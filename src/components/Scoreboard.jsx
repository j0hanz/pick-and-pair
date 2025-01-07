import React from 'react';

export default function Scoreboard({ score, moves }) {
  return (
    <div>
      <p>Moves: {moves}</p>
      <p>Score: {score}</p>
    </div>
  );
}
