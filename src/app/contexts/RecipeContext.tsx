import { createContext, useEffect, useState } from 'react';

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

export const RecipeContext = createContext<{
  recipesList: { title: string; description: string; ingredients: string[]; id: string }[];
  listItem: { title: string; description: string; ingredients: string[]; id: string };
  addRecipe: (title: string, description: string, ingredientsList: string[]) => void;
  setItem: (title: string, description: string, ingredients: string[], id: string) => void;
  updateRecipe: (title: string, description: string, ingredients: string[], id: string) => void;
  deleteRecipe: () => void;
} | null>(null);

export const RecipeContextProvider = ({ children }: ContextProps) => {
  const localRecipes: { title: string; description: string; ingredients: string[]; id: string }[] = JSON.parse(
    localStorage.getItem('storedRecipes')!,
  );
  const [recipesList, setRecipesList] = useState<
    { title: string; description: string; ingredients: string[]; id: string }[]
  >(localRecipes === null ? [] : [...localRecipes]);

  useEffect(() => {
    localStorage.setItem('storedRecipes', JSON.stringify(recipesList));
  }, [recipesList]);

  const [previewItem, setPreviewItem] = useState<{
    title: string;
    description: string;
    ingredients: string[];
    id: string;
  }>({
    title: '',
    description: '',
    ingredients: [],
    id: '',
  });

  const deleteItem = () => {
    recipesList.forEach((item) => {
      if (item.id === previewItem.id) {
        setRecipesList((prev) => prev.filter((recipe) => recipe.id !== item.id));
      }
    });
  };

  const setItem = (title: string, description: string, ingredients: string[], id: string) => {
    setPreviewItem((prev) => (prev = { title: title, description: description, ingredients: ingredients, id: id }));
  };

  const updateRecipe = (title: string, description: string, ingredients: string[], id: string) => {
    setItem(title, description, ingredients, id);
    setRecipesList((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, title: title, description: description, ingredients: ingredients } : item;
      });
    });
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
        listItem: previewItem,
        recipesList,
        addRecipe,
        setItem,
        updateRecipe,
        deleteRecipe: deleteItem,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
