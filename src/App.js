import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Cards />
      </header>
    </div>
  );
}

export default App;
