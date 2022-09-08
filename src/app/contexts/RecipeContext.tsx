import { createContext, useState } from 'react';

import { Recipe } from 'app/Components/Recipe/Recipe';

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

export const RecipeContext = createContext<{
  recipesList: JSX.Element[];
  recipeIngredients: string[];
  addRecipe: () => void;
  setNewTitle: (title: string) => void;
  setNewDescription: (description: string) => void;
  addNewIngredient: (ingredients: string) => void;
} | null>(null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RecipeContextProvider = ({ children }: ContextProps) => {
  const [recipesList, setRecipesList] = useState<JSX.Element[]>([]);
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState<string[]>([]);

  const setNewTitle = (title: string) => {
    setRecipeTitle(title);
  };
  const setNewDescription = (description: string) => {
    setRecipeDescription(description);
  };
  const addNewIngredient = (ingredient: string) => {
    setRecipeIngredients([...recipeIngredients, ingredient]);
  };

  const addRecipe = () => {
    const newRecipe: JSX.Element = (
      <Recipe
        title={recipeTitle}
        description={recipeDescription}
        ingredients={recipeIngredients}
        id={`Recipe No. ${Math.random()}`}
      />
    );
    setRecipesList([...recipesList, newRecipe]);
  };

  return (
    <RecipeContext.Provider
      value={{ recipesList, recipeIngredients, addRecipe, setNewTitle, setNewDescription, addNewIngredient }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
