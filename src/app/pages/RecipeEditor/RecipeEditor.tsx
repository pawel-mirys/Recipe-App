import { EditorForm } from 'app/Components/EditorForm/EditorForm';
import styles from './RecipeEditor.module.scss';

export const RecipeEditor = () => {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>
        <h2>Edit Recipe</h2>
      </div>
      <EditorForm />
    </div>
  );
};
