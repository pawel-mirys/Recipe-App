import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Button } from 'ui/Button/Button';
import styles from './RecipeForm.module.scss';

export const RecipeForm = () => {
  const input: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input');
  const ingredientInput: HTMLInputElement = document.querySelector('.ingredientInput')!;

  return (
    <form className={styles.creatorForm}>
      <label htmlFor="Title">
        Title:
        <input
          className={clsx(styles.nameInput, styles.input, 'input')}
          type="text"
          placeholder="Title"
          name="Title"
          onChange={(e) => {}}
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
          onChange={(e) => {}}
        />
      </label>
      <div className={styles.ingredientsContainer}>
        <p>Ingredients: {}</p>
        <ul>
          <span className={styles.errorMessage}>Use input below to add some ingredients</span>
        </ul>
        <div className={styles.ingredientsContainer}>
          <label>
            Add Ingredient:
            <input
              className={clsx(styles.recipeInput, styles.input, 'ingredientInput')}
              type="text"
              placeholder="Add Ingredient"
              onChange={(e) => {}}
            />
          </label>
          <Button className={styles.returnButton} children="Add Ingredient" onClick={() => {}} />
        </div>
      </div>
    </form>
  );
};
