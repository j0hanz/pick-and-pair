import styles from './App.module.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1 className={styles.gameTitle}>Pick & Pair</h1>
        <div className={styles.container}>
          <Cards />
        </div>
      </header>
    </div>
  );
}

export default App;
