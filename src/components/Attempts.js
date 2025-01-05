import React from 'react';

export default function Attempts({ attempts }) {
  const attemptsLeft = 5 - attempts;
  return <div>Attempts left: {attemptsLeft}</div>;
}
