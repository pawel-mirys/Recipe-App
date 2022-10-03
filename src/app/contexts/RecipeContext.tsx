import { createContext, useState } from 'react';

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

export const RecipeContext = createContext<{
  recipesList: { title: string; description: string; ingredients: string[]; id: string }[];
  addRecipe: (title: string, description: string, ingredientsList: string[]) => void;
} | null>(null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RecipeContextProvider = ({ children }: ContextProps) => {
  const [recipesList, setRecipesList] = useState<
    { title: string; description: string; ingredients: string[]; id: string }[]
  >([]);

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
        recipesList,
        addRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
