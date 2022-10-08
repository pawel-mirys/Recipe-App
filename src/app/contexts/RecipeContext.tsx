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
  deleteRecipe: () => void;
} | null>(null);

export const RecipeContextProvider = ({ children }: ContextProps) => {
  const [recipesList, setRecipesList] = useState([...recipesListMeta]);

  const [listItem, setListItem] = useState<{ title: string; description: string; ingredients: string[]; id: string }>({
    title: '',
    description: '',
    ingredients: [],
    id: '',
  });

  const deleteItem = () => {
    recipesList.forEach((item, index) => {
      if (item.id === listItem.id) {
        recipesList.splice(index, 1);
      }
    });
  };

  const setItem = (title: string, description: string, ingredients: string[], id: string) => {
    setListItem((prev) => (prev = { title: title, description: description, ingredients: ingredients, id: id }));
  };

  const addRecipe = (title: string, description: string, ingredientsList: string[]) => {
    const newRecipe: { title: string; description: string; ingredients: string[]; id: string } = {
      title: title,
      description: description,
      ingredients: ingredientsList,
      id: `Recipe No. ${recipesList.length + 1}`,
    };
    setRecipesList([...recipesList, newRecipe]);
  };

  return (
    <RecipeContext.Provider
      value={{
        listItem,
        recipesList,
        addRecipe,
        setItem,
        deleteRecipe: deleteItem,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
