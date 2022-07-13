import styles from './RecipesList.module.scss';
import { recipes } from './recipes-meta';

export const RecipesList = () => {
  let listItem = recipes.map((item) => {
    //add keys
    return item;
  });

  return <div className={styles.recipesList}>{listItem}</div>;
};
