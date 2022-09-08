import { RecipeForm } from 'app/Components/RecipeForm/RecipeForm';
import { RecipeContext } from 'app/contexts/RecipeContext';
import { useContext } from 'react';

import { LinkButton } from 'ui/LinkButton/LinkButton';
import styles from './RecipeCreator.module.scss';
export const RecipeCreator = () => {
  const recipeContext = useContext(RecipeContext);
  return (
    <div className={styles.creatorContainer}>
      <div className={styles.creatorHeader}>
        <h2>Add Recipe</h2>
      </div>
      <RecipeForm />
      <LinkButton
        onClick={() => {
          recipeContext?.addRecipe();
        }}
        className={''}
        to={'/'}
        children="Add Recipe"
      />
    </div>
  );
};
