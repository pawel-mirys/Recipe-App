import { useState } from 'react';
import clsx from 'clsx';
import { LinkButton } from 'ui/LinkButton/LinkButton';
import { Button } from 'ui/Button/Button';
import styles from './RecipeForm.module.scss';
import { recipes } from 'app/Components/RecipesList/recipes-meta';
import { Recipe } from 'app/Components/Recipe/Recipe';

export const RecipeForm = () => {
  const input: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input');
  let ingredients: string[] = [];
  const [valid, setValid] = useState(false);
  const [ingredientsList, setIngredientsList] = useState(ingredients);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [message, setMessage] = useState(false);

  const showMessage = () => {
    setTimeout(() => {
      setMessage(false);
    }, 2000);
  };

  const resetDataValues = () => {
    setTitle('');
    setDescription('');
    setIngredient('');
    setIngredientsList([]);
    input.forEach((item) => {
      item.value = '';
    });
  };

  const checkAndAdd = () => {
    if (!title || !description || ingredientsList.length === 0) {
      setValid(false);
    } else {
      setValid(true);
      recipes.push(<Recipe title={title} description={description} ingredients={ingredientsList} key="" />);
      resetDataValues();
      setMessage(true);
      showMessage();
    }
  };

  return (
    <div className={styles.creatorContainer}>
      <div className={styles.creatorHeader}>
        <h2>Add Recipe</h2>
      </div>
      <form className={styles.creatorForm} onSubmit={checkAndAdd}>
        <label>
          Title:
          <input
            className={clsx(styles.nameInput, styles.input, 'input')}
            type="text"
            placeholder="Title"
            name="Title"
            onChange={(e) => {
              setTitle(e.target.value);
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
              setDescription(e.target.value);
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
                  setIngredient(e.target.value);
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
      <Button
        children="Add Recipe"
        onClick={() => {
          checkAndAdd();
          showMessage();
        }}
        type="submit"
        className={styles.addButton}
      />
      <LinkButton
        onClick={() => {
          if (!valid) {
            if (window.confirm('All changes will be lost')) {
              setValid(true);
            }
          }
        }}
        className={clsx(!valid ? styles.redButton : styles.greenButton, styles.returnButton)}
        to={valid ? '/' : ''}
        children="Return"
      />
      {message && <div className={styles.message}> Recipe has been added!</div>}
    </div>
  );
};
