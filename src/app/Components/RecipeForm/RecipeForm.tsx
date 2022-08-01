import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { LinkButton } from 'ui/LinkButton/LinkButton';
import { Button } from 'ui/Button/Button';
import styles from './RecipeForm.module.scss';
import { recipes } from 'app/Components/RecipesList/recipes-meta';
import { Recipe } from 'app/Components/Recipe/Recipe';

export const RecipeForm = () => {
  const input: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input');
  const [valid, setValid] = useState(false);
  const [ingredientsList, setIngredientsList] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredient, setIngredient] = useState('');

  useEffect(() => {
    if (!title || !description || ingredientsList.length === 0) {
      setValid((prevValid) => (prevValid = false));
    } else {
      setValid((prevValid) => (prevValid = true));
    }
  }, [title, description, ingredientsList]);

  const resetDataValues = () => {
    setTitle('');
    setDescription('');
    setIngredient('');
    setIngredientsList([]);
    input.forEach((item) => {
      item.value = '';
    });
  };

  const pushRecipe = () => {
    if (valid) {
      recipes.push(<Recipe title={title} description={description} ingredients={ingredientsList} />);
      resetDataValues();
    }
  };

  return (
    <div className={styles.creatorContainer}>
      <div className={styles.creatorHeader}>
        <h2>Add Recipe</h2>
      </div>
      <form className={styles.creatorForm}>
        <label>
          Title:
          <input
            className={clsx(!title && styles.inputInvalid, styles.nameInput, styles.input, 'input')}
            type="text"
            placeholder="Title"
            name="Title"
            onChange={(e) => {
              setTitle((prevTitle) => (prevTitle = e.target.value));
            }}
          />
          {!title && <span className={styles.errorMessage}>Recipe needs title</span>}
        </label>
        <label>
          Recipe Description:
          <textarea
            name="Recipe Description"
            className={clsx(!description && styles.inputInvalid, styles.stepsTextArea, 'input')}
            cols={30}
            rows={10}
            placeholder="Recipe Steps"
            onChange={(e) => {
              setDescription((prevSteps) => (prevSteps = e.target.value));
            }}
          />
          {!description && <span className={styles.errorMessage}>Recipe need description</span>}
        </label>

        <div className={styles.ingredientsContainer}>
          <p>Ingredients: {ingredientsList.length}</p>
          <ul>
            {ingredientsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {ingredientsList.length === 0 && (
              <span className={styles.errorMessage}>Use input below to add some ingredients</span>
            )}
          </ul>
          <div className={styles.ingredientsContainer}>
            <label>
              Add Ingredient:
              <input
                className={clsx(styles.recipeInput, styles.input, 'ingredientInput')}
                type="text"
                placeholder="Add Ingredient"
                onChange={(e) => {
                  setIngredient((prevIngredient) => (prevIngredient = e.target.value));
                }}
              />
            </label>
            <Button
              className={styles.returnButton}
              children="Add Ingredient"
              onClick={() => {
                const ingredientInput: HTMLInputElement = document.querySelector('.ingredientInput')!;
                if (ingredient === '') {
                  throw Error('Ingredient input cannot be empty');
                }
                setIngredientsList([...ingredientsList, ingredient]);
                ingredientsList.push(ingredient);
                setIngredient('');
                ingredientInput.value = '';
              }}
            />
          </div>
        </div>
      </form>

      <LinkButton
        onClick={() => {
          pushRecipe();
        }}
        className={clsx(!valid ? styles.redButton : styles.greenButton, styles.returnButton)}
        to={valid ? '/' : ''}
        children="Add Recipe"
      />
    </div>
  );
};
