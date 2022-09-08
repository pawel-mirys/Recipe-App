import { useContext } from 'react';
import clsx from 'clsx';

import { RecipeContext } from 'app/contexts/RecipeContext';
import { Button } from 'ui/Button/Button';
import styles from './RecipeForm.module.scss';

export const RecipeForm = () => {
  const recipeContext = useContext(RecipeContext);
  const input: NodeListOf<HTMLInputElement> = document.querySelectorAll('input')!;
  const ingredientInput: HTMLInputElement = document.querySelector('.ingredientInput')!;

  const inputHandler = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>): string => {
    const inputValue = e.target.value;
    return inputValue;
  };

  return (
    <form className={styles.creatorForm}>
      <label htmlFor="Title">
        Title:
        <input
          className={clsx(styles.nameInput, styles.input, 'input')}
          type="text"
          placeholder="Title"
          name="Title"
          onChange={(e) => {
            recipeContext?.setNewTitle(inputHandler(e));
          }}
        />
      </label>
      <label htmlFor="Recipe Description">
        Recipe Description:
        <textarea
          name="Recipe Description"
          className={clsx(styles.stepsTextArea, 'input')}
          cols={30}
          rows={10}
          placeholder="Recipe Steps"
          onChange={(e) => {
            recipeContext?.setNewDescription(inputHandler(e));
          }}
        />
      </label>
      <div className={styles.ingredientsContainer}>
        {recipeContext?.recipeIngredientsList.length === 0 && (
          <span className={styles.errorMessage}>Use input below to add some ingredients</span>
        )}
        <p>Ingredients:</p>
        <ul>
          {recipeContext?.recipeIngredientsList.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className={styles.ingredientsContainer}>
          <label>
            Add Ingredient:
            <input
              className={clsx(styles.recipeInput, styles.input, 'ingredientInput')}
              type="text"
              placeholder="Add Ingredient"
              onChange={(e) => {
                recipeContext?.setNewIngredient(inputHandler(e));
              }}
            />
          </label>
          <Button
            className={styles.returnButton}
            children="Add Ingredient"
            onClick={() => {
              recipeContext?.addNewIngredient();
              ingredientInput.nodeValue = '';
            }}
          />
        </div>
      </div>
    </form>
  );
};
