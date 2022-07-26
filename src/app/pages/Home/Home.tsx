import styles from './Home.module.scss';
import { RecipesList } from 'app/Components/RecipesList/RecipesList'; // fix the path
import { LinkButton } from 'ui/LinkButton/LinkButton';

export const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.pageContainer}>
        <div className={styles.searchContainer}>
          <input className={styles.searchInput} type="text" placeholder="Search" />
        </div>
        <div className={styles.recipesContainer}>
          <RecipesList />
          <LinkButton to="/creator" children="New Recipe" />
        </div>
      </div>
    </div>
  );
};
