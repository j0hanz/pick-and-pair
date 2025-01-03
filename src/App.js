import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1 className={styles.gameTitle}>Pick & Pair</h1>
        <Container className={styles.container}>
          <Cards />
        </Container>
      </header>
    </div>
  );
}

export default App;
