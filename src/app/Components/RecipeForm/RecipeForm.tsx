import { useState } from 'react';
import clsx from 'clsx';
import { LinkButton } from '../../../ui/LinkButton/LinkButton';
import { Button } from '../../../ui/Button/Button';
import styles from './RecipeForm.module.scss';
import { recipes } from '../RecipesList/recipes-meta';
import { Recipe } from '../Recipe/Recipe';

interface values {
  title: string;
  description: string;
  ingredient: string;
  ingredients: string[];
}

let dataValues: values = {
  title: '',
  description: '',
  ingredient: '',
  ingredients: [],
};

export const RecipeForm = () => {
  const [data, setData] = useState(dataValues.ingredients);
  const resetDataValues = () => {
    dataValues.title = '';
    dataValues.description = '';
    dataValues.ingredient = '';
    dataValues.ingredients = [];
  };

  return (
    <div className={styles.creatorContainer}>
      <div className={styles.creatorHeader}>
        <h2>Add Recipe</h2>
      </div>
      <div className={styles.creatorForm}>
        <input
          className={clsx(styles.nameInput, styles.input)}
          type="text"
          placeholder="Recipe Name"
          onChange={(e) => {
            dataValues.title = e.target.value;
          }}
          required
        />
        <textarea
          name="Recipe Steps"
          className={styles.stepsTextArea}
          cols={30}
          rows={10}
          placeholder="Recipe Steps"
          onChange={(e) => {
            dataValues.description = e.target.value;
          }}
          required
        ></textarea>
        <div className={styles.ingredientsContainer}>
          <p>Ingredients:</p>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div>
            <input
              className={clsx(styles.recipeInput, styles.input, 'ingredientInput')}
              type="text"
              placeholder="Add Ingredient"
              onChange={(e) => {
                dataValues.ingredient = e.target.value;
              }}
              required
            />
            <Button
              children="Add Ingredient"
              onClick={() => {
                const input: HTMLInputElement = document.querySelector('.ingredientInput')!;
                if (dataValues.ingredient === '') {
                  throw Error('Ingredient input cannot be empty');
                }
                setData([...data, dataValues.ingredient]);
                dataValues.ingredients.push(dataValues.ingredient);
                dataValues.ingredient = '';
                input.value = '';
              }}
            />
          </div>
        </div>
      </div>
      <LinkButton
        onClick={() => {
          let isValid = '';
          if (dataValues.title === '') {
            throw Error('Title input cannot be empty');
          } else if (dataValues.description === '') {
            throw Error('description area cannot be empty');
          } else {
            recipes.push(
              <Recipe
                title={dataValues.title}
                description={dataValues.description}
                ingredients={dataValues.ingredients}
              />,
            );
            resetDataValues();
          }
        }}
        className={styles.linkButton}
        to="/"
        children="Add Recipe"
      />
    </div>
  );
};
