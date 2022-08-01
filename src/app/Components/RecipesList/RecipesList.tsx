import styles from './RecipesList.module.scss';
import { recipes } from 'app/Components/RecipesList/recipes-meta';

export const RecipesList = () => {
  let listItem = recipes.map((item, index) => {
    return (
      <div className={styles.listItem} key={index}>
        {item}
      </div>
    );
  });

  return <div className={styles.recipesList}>{listItem}</div>;
};
