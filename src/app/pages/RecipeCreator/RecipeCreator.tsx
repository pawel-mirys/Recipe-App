import { RecipeForm } from 'app/Components/RecipeForm/RecipeForm';
import { RecipeContext } from 'app/contexts/RecipeContext';
import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';

import { LinkButton } from 'ui/LinkButton/LinkButton';
import styles from './RecipeCreator.module.scss';
export const RecipeCreator = () => {
  const [valid, setValid] = useState(false);
  const recipeContext = useContext(RecipeContext);

  useEffect(() => {
    if (
      recipeContext?.recipeTitle !== '' &&
      recipeContext?.recipeDescription !== '' &&
      recipeContext?.recipeIngredientsList.length !== 0
    ) {
      setValid((prevValid) => (prevValid = true));
    }
  }, [recipeContext?.recipeTitle, recipeContext?.recipeDescription, recipeContext?.recipeIngredientsList]);

  return (
    <div className={styles.creatorContainer}>
      <div className={styles.creatorHeader}>
        <h2>Add Recipe</h2>
      </div>
      <RecipeForm />
      <LinkButton
        onClick={() => {
          if (valid) {
            recipeContext?.addRecipe();
          }
        }}
        className={clsx(!valid ? styles.redButton : styles.greenButton, styles.returnButton)}
        to={!valid ? '' : '/'}
        children="Add Recipe"
      />
    </div>
  );
};
