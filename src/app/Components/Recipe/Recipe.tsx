import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { RecipeContext } from 'app/contexts/RecipeContext';
import styles from './Recipe.module.scss';

type RecipeProps = {
  title: string;
  description: string;
  ingredients: string[];
  id: string;
};

export const Recipe = ({ title, description, ingredients, id }: RecipeProps) => {
  const context = useContext(RecipeContext);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        context?.setItem(title, description, ingredients, id);
        navigate('/preview');
      }}
      className={styles.recipe}
      id={id}
    >
      <div className={styles.recipeContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.ingredients}>
          {ingredients.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
