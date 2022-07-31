import styles from './Recipe.module.scss';

type RecipeProps = {
  title: string;
  description: string;
  ingredients: string[];
};

export const Recipe = ({ title, description, ingredients }: RecipeProps) => {
  return (
    <div
      onClick={() => {
        console.log(title, description, ingredients);
      }}
      className={styles.recipe}
      key={title}
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
