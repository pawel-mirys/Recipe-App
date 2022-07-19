import { recipes } from '../../components/RecipesList/recipes-meta';
import { LinkButton } from '../../../ui/LinkButton/LinkButton';
import { RecipeForm } from '../../components/RecipeForm/RecipeForm';
import { Recipe } from '../../components/Recipe/Recipe';
import styles from './RecipeCreator.module.scss';

export const RecipeCreator = () => {
  return (
    <div>
      <RecipeForm />
    </div>
  );
};
