import { createContext, useEffect, useState } from 'react';

import { Recipe } from 'app/Components/Recipe/Recipe';

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

export const RecipeContext = createContext<{
  recipesList: { title: string; description: string; ingredients: string[] }[];
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
  const [recipesList, setRecipesList] = useState<{ title: string; description: string; ingredients: string[] }[]>([]);
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
  const resetValues = () => {
    setRecipeIngredientsList([]);
    setRecipeTitle('');
    setRecipeDescription('');
  };
  const addRecipe = () => {
    const newRecipe: { title: string; description: string; ingredients: string[] } = {
      title: recipeTitle,
      description: recipeDescription,
      ingredients: recipeIngredientsList,
    };
    setRecipesList([...recipesList, newRecipe]);
    resetValues();
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
