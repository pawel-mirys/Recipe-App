import { useContext } from 'react';
import styles from './RecipePreview.module.scss';
import { RecipeContext } from 'app/contexts/RecipeContext';
import { Button } from 'ui/Button/Button';

export const RecipePreview = () => {
  const context = useContext(RecipeContext);
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
        <Button onClick={() => {}} className={styles.deleteButton}>
          Delete
        </Button>
      </div>
    </div>
  );
};
