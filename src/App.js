import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Container className={styles.container}>
          <Cards />
        </Container>
      </header>
    </div>
  );
}

export default App;
