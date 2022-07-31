import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { LinkButton } from 'ui/LinkButton/LinkButton';
import { Button } from 'ui/Button/Button';
import styles from './RecipeForm.module.scss';
import { recipes } from 'app/components/RecipesList/recipes-meta';
import { Recipe } from 'app/components/Recipe/Recipe';

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
    if (!title) {
      console.log('title cannot be empty');
    }
    if (!description) {
      console.log('description cannot be empty');
    }
    if (ingredientsList.length === 0) {
      console.log('Recipe needs ingredients');
    } else {
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
            className={clsx(styles.nameInput, styles.input, 'input')}
            type="text"
            placeholder="Title"
            name="Title"
            onChange={(e) => {
              setTitle((prevTitle) => (prevTitle = e.target.value));
            }}
            required
          />
        </label>
        <label>
          Recipe Steps:
          <textarea
            name="Recipe Steps"
            className={clsx(styles.stepsTextArea, 'input')}
            cols={30}
            rows={10}
            placeholder="Recipe Steps"
            onChange={(e) => {
              setDescription((prevSteps) => (prevSteps = e.target.value));
            }}
            required
          />
        </label>

        <div className={styles.ingredientsContainer}>
          <p>Ingredients:</p>
          <ul>
            {ingredientsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
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
                required
              />
            </label>
            <Button
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
