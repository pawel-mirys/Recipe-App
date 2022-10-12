import { useContext } from 'react';

import styles from './Home.module.scss';
import { RecipesList } from 'app/Components/RecipesList/RecipesList';
import { LinkButton } from 'ui/LinkButton/LinkButton';
import { RecipeContext } from 'app/contexts/RecipeContext';

export const Home = () => {
  const context = useContext(RecipeContext);
  return (
    <div className={styles.homePage}>
      <div className={styles.pageContainer}>
        <div className={styles.recipesContainer}>
          <div className={styles.message}>You have {context?.recipesList.length} recipes saved!</div>
          <RecipesList />
          <LinkButton to="/creator" children="New Recipe" />
        </div>
      </div>
    </div>
  );
};
