import { RecipeForm } from 'app/Components/RecipeForm/RecipeForm';
import styles from './RecipeCreator.module.scss';
export const RecipeCreator = () => {
  return (
    <div className={styles.creatorContainer}>
      <div className={styles.creatorHeader}>
        <h2>Add Recipe</h2>
      </div>
      <RecipeForm />
    </div>
  );
};
