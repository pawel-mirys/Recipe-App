import styles from './RecipesList.module.scss';
import { recipes } from './recipes-meta';

export const RecipesList = () => {
  let listItem = recipes.map((item) => {
    // fix key problem
    return item;
  });

  return <div className={styles.recipesList}>{listItem}</div>;
};
