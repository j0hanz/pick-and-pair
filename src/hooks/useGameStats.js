import { useState, useEffect, useCallback } from 'react';

export const useGameStats = () => {
  const [stats, setStats] = useState({
    moves: 0,
    matches: 0,
    time: 0,
    isComplete: false,
    bestTime: localStorage.getItem('bestTime') || null,
    bestMoves: localStorage.getItem('bestMoves') || null,
  });

  useEffect(() => {
    let interval;
    if (!stats.isComplete) {
      interval = setInterval(() => {
        setStats((prev) => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stats.isComplete]);

  const updateStats = useCallback((type, value) => {
    setStats((prev) => ({ ...prev, [type]: value }));
  }, []);

  const saveHighScore = useCallback(
    (time, moves) => {
      const currentBestTime = parseInt(stats.bestTime) || Infinity;
      const currentBestMoves = parseInt(stats.bestMoves) || Infinity;

      if (time < currentBestTime) {
        localStorage.setItem('bestTime', time);
        updateStats('bestTime', time);
      }
      if (moves < currentBestMoves) {
        localStorage.setItem('bestMoves', moves);
        updateStats('bestMoves', moves);
      }
    },
    [stats.bestTime, stats.bestMoves, updateStats]
  );

  return [stats, updateStats, saveHighScore];
};
