import React from 'react';

export default function Leaderboard({ scores }) {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.name}: {score.points} points
          </li>
        ))}
      </ul>
    </div>
  );
}
