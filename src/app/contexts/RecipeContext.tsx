import { createContext, useState } from 'react';

import { Recipe } from 'app/Components/Recipe/Recipe';

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

export const RecipeContext = createContext<{
  recipesList: JSX.Element[];
  recipeIngredientsList: string[];
  recipeTitle: string;
  recipeDescription: string;
  recipeIngredient: string;
  addRecipe: () => void;
  setNewTitle: (title: string) => void;
  setNewDescription: (description: string) => void;
  setNewIngredient: (ingredient: string) => void;
  addNewIngredient: () => void;
} | null>(null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RecipeContextProvider = ({ children }: ContextProps) => {
  const [recipesList, setRecipesList] = useState<JSX.Element[]>([]);
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeIngredient, setRecipeIngredient] = useState('');
  const [recipeIngredientsList, setRecipeIngredientsList] = useState<string[]>([]);

  const setNewTitle = (title: string) => {
    setRecipeTitle((prevTitle) => (prevTitle = title));
  };
  const setNewDescription = (description: string) => {
    setRecipeDescription((prevDescription) => (prevDescription = description));
  };
  const setNewIngredient = (ingredient: string) => {
    setRecipeIngredient((prevIngredient) => (prevIngredient = ingredient));
  };
  const addNewIngredient = () => {
    setRecipeIngredientsList([...recipeIngredientsList, recipeIngredient]);
  };

  const addRecipe = () => {
    const newRecipe: JSX.Element = (
      <Recipe
        title={recipeTitle}
        description={recipeDescription}
        ingredients={recipeIngredientsList}
        id={`Recipe No. ${Math.random()}`}
      />
    );
    setRecipesList([...recipesList, newRecipe]);
    setRecipeIngredientsList([]);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipesList,
        recipeIngredientsList,
        recipeTitle,
        recipeDescription,
        recipeIngredient,
        addRecipe,
        setNewTitle,
        setNewDescription,
        setNewIngredient,
        addNewIngredient,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
