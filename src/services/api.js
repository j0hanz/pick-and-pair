export const fetchScores = async () => {
  const response = await fetch('/api/scores');
  return response.json();
};

export const submitScore = async (score) => {
  await fetch('/api/scores', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(score),
  });
};
