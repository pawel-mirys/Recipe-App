import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './RecipePreview.module.scss';
import { RecipeContext } from 'app/contexts/RecipeContext';
import { Button } from 'ui/Button/Button';

export const RecipePreview = () => {
  const context = useContext(RecipeContext);
  const navigate = useNavigate();
  return (
    <div className={styles.previewContainer}>
      <h1 className={styles.previewTitle}>{context?.listItem.title}</h1>
      <p className={styles.previewDescription}>{context?.listItem.description}</p>
      <ul className={styles.ingredientsList}>
        {context?.listItem.ingredients.map((item, index) => {
          return (
            <li className={styles.ingredient} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className={styles.controls}>
        <Button onClick={() => {}} className={styles.editButton}>
          Edit
        </Button>
        <Button
          onClick={() => {
            if (window.confirm('Do you want to delete this recipe?')) {
              context?.deleteRecipe();
              navigate('/');
            }
          }}
          className={styles.deleteButton}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
