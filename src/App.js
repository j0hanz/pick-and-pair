import React, { useState } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards';
import Leaderboard from './components/Leaderboard';

function App() {
  const [scores, setScores] = useState([
    { name: 'Alice', points: 8 },
    { name: 'Bob', points: 7 },
  ]);

  const saveScore = (playerName, points) => {
    if (!playerName || points < 0) {
      console.error('Invalid score data');
      return;
    }
    setScores((prevScores) => [...prevScores, { name: playerName, points }]);
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1 className={styles.gameTitle}>Pick & Pair</h1>
        <div className={styles.container}>
          <Cards onGameEnd={(points) => saveScore('Player', points)} />
        </div>
        <Leaderboard scores={scores} />
      </header>
    </div>
  );
}

export default App;
