import styles from './Recipe.module.scss';

type RecipeProps = {
  title?: string;
  description?: string;
  ingredients?: string[];
};

export const Recipe = ({ title, description, ingredients }: RecipeProps) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.recipeContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Title</h3>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>Description</p>
        </div>
        <div className={styles.ingridients}>
          <ul>
            <li>ing1</li>
            <li>ing2</li>
            <li>ing3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
