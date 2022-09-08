import { useContext } from 'react';

import { RecipeContext } from 'app/contexts/RecipeContext';
import styles from './RecipesList.module.scss';

export const RecipesList = () => {
  const recipeContext = useContext(RecipeContext);

  let listItem = recipeContext?.recipesList.map((item, index) => {
    return (
      <div className={styles.listItem} key={index}>
        {item}
      </div>
    );
  });

  return <div className={styles.recipesList}>{listItem}</div>;
};
