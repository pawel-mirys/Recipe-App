import { useState } from 'react';
import clsx from 'clsx';

import { LinkButton } from '../../../ui/LinkButton/LinkButton';
import { Button } from '../../../ui/Button/Button';
import styles from './RecipeCreator.module.scss';

interface values {
  name: string;
  steps: string;
  ingredient: string;
  ingredients: string[];
}

let dataValues: values = {
  name: '',
  steps: '',
  ingredient: '',
  ingredients: [],
};

export const RecipeCreator = () => {
  const [data, setData] = useState(dataValues.ingredients);

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
            dataValues.name = e.target.value;
          }}
        />
        <textarea
          name="Recipe Steps"
          className={styles.stepsTextArea}
          cols={30}
          rows={10}
          placeholder="Recipe Steps"
          onChange={(e) => {
            dataValues.steps = e.target.value;
          }}
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
            />
            <Button
              children="Add Ingredient"
              onClick={() => {
                const input: HTMLInputElement = document.querySelector('.ingredientInput')!;
                if (dataValues.ingredient === '') {
                  throw Error('Ingredient input cannot be empty');
                }
                setData([...data, dataValues.ingredient]);
                dataValues.ingredient = '';
                input.value = '';
              }}
            />
          </div>
        </div>
      </div>
      <LinkButton
        onClick={() => {
          console.log(dataValues);
        }}
        className={styles.linkButton}
        to="/"
        children="Add Recipe"
      />
    </div>
  );
};
