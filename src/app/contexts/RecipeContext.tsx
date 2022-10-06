import { createContext, useState } from 'react';

import { recipesListMeta } from 'app/Components/RecipesList/recipeList-meta';

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

export const RecipeContext = createContext<{
  recipesList: { title: string; description: string; ingredients: string[]; id: string }[];
  listItem: { title: string; description: string; ingredients: string[] };
  addRecipe: (title: string, description: string, ingredientsList: string[]) => void;
  setItem: (title: string, description: string, ingredients: string[], id: string) => void;
} | null>(null);

export const RecipeContextProvider = ({ children }: ContextProps) => {
  const [recipesList, setRecipesList] = useState([...recipesListMeta]);

  const [listItem, setListItem] = useState<{ title: string; description: string; ingredients: string[]; id: string }>({
    title: '',
    description: '',
    ingredients: [],
    id: '',
  });

  const setItem = (title: string, description: string, ingredients: string[], id: string) => {
    setListItem((prev) => (prev = { title: title, description: description, ingredients: ingredients, id: id }));
  };

  const addRecipe = (title: string, description: string, ingredientsList: string[]) => {
    const newRecipe: { title: string; description: string; ingredients: string[]; id: string } = {
      title: title,
      description: description,
      ingredients: ingredientsList,
      id: `Recipe No. ${recipesListMeta.length + 1}`,
    };
    setRecipesList([...recipesListMeta, newRecipe]);
  };

  return (
    <RecipeContext.Provider
      value={{
        listItem,
        recipesList,
        addRecipe,
        setItem,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
