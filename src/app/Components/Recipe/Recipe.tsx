import { createContext } from 'react';

import styles from './Recipe.module.scss';

type RecipeProps = {
  title: string;
  description: string;
  ingredients: string[];
};

export const RecipeContext = createContext<{
  title: RecipeProps['title'];
  description: RecipeProps['description'];
  ingredients: RecipeProps['ingredients'];
}>;

export const Recipe = ({ title, description, ingredients }: RecipeProps) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.recipeContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.ingredients}>
          {ingredients.map((item) => {
            return <div>{item}</div>; //Add key
          })}
        </div>
      </div>
    </div>
  );
};
