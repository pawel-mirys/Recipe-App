import { useContext } from 'react';

import { RecipeContext } from 'app/contexts/RecipeContext';
import styles from './RecipesList.module.scss';
import { Recipe } from '../Recipe/Recipe';

export const RecipesList = () => {
  const recipeContext = useContext(RecipeContext);

  let listItem = recipeContext?.recipesList.map((item, index) => {
    return (
      <div className={styles.listItem} key={index}>
        <Recipe title={item.title} description={item.description} ingredients={item.ingredients} id={item.id} />
      </div>
    );
  });

  return <div className={styles.recipesList}>{listItem}</div>;
};
