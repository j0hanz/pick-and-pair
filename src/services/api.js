export const fetchScores = async () => {
  try {
    const response = await fetch('/api/scores');
    if (!response.ok) {
      throw new Error('Failed to fetch scores');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const submitScore = async (score) => {
  try {
    const response = await fetch('/api/scores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(score),
    });
    if (!response.ok) {
      throw new Error('Failed to submit score');
    }
  } catch (error) {
    console.error(error);
  }
};
