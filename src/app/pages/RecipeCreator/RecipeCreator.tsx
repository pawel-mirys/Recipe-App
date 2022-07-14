import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { LinkButton } from '../../../ui/LinkButton/LinkButton';
import { Button } from '../../../ui/Button/Button';
import styles from './RecipeCreator.module.scss';

export const RecipeCreator = () => {
  return (
    <div className={styles.creatorContainer}>
      <div className={styles.creatorHeader}>
        <h2>Add Recipe</h2>
      </div>
      <div className={styles.creatorForm}>
        <input className={clsx(styles.nameInput, styles.input)} type="text" placeholder="Recipe Name" />
        <textarea
          name="Recipe Steps"
          className={styles.stepsTextArea}
          cols={30}
          rows={10}
          placeholder="Recipe Steps"
        ></textarea>
        <div className={styles.ingredientsContainer}>
          <p>Ingredients:</p>
          <div className={styles.ingredientContainer}>
            <input className={clsx(styles.recipeInput, styles.input)} type="text" placeholder="Add Ingredient" />
            <Button
              children="Add Ingredient"
              onClick={() => {
                console.log('Add Ingredient');
              }}
            />
          </div>
        </div>
      </div>
      <LinkButton className={styles.linkButton} to="/" children="Add Recipe" />
    </div>
  );
};
