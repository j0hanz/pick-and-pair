import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import styles from './App.module.css';
import Cards from './components/Cards';

function App() {
  const [isGameActive, setIsGameActive] = useState(false);

  const toggleGame = () => setIsGameActive((prev) => !prev);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Container className={styles.container}>
          {isGameActive ? (
            <Cards onRestart={toggleGame} />
          ) : (
            <Button onClick={toggleGame} className={styles.button}>
              Start Game
            </Button>
          )}
        </Container>
      </header>
    </div>
  );
}

export default App;
