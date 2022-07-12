import styles from './Home.module.scss';
import { Button } from '../../ui/Button/Button'; //fix the path

export const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.pageContainer}>
        <div className={styles.headerContainer}>
          <h1>The Recipe App</h1>
          <p>What recipe do you want to save today?</p>
        </div>
        <div className={styles.searchContainer}>
          <input className={styles.searchInput} type="text" placeholder="Search" />
        </div>
        <div className={styles.recipesContainer}>
          <Button
            className={styles.button}
            onClick={() => {
              console.log('sfsa');
            }}
          >
            Add Recipe
          </Button>
        </div>
      </div>
    </div>
  );
};
