import styles from './Home.module.scss';
import { Button } from '../../../ui/Button/Button'; //fix the path
import { RecipesList } from '../../Components/RecipesList/RecipesList'; // fix the path
import { Link } from 'react-router-dom';
import { LinkButton } from '../../../ui/LinkButton/LinkButton';

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
          <RecipesList />

          <LinkButton to="/creator" children="Add Recipe" />
        </div>
      </div>
    </div>
  );
};
