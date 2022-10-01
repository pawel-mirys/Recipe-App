import { createContext, useState } from 'react';

import { Recipe } from 'app/Components/Recipe/Recipe';

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

export const RecipeContext = createContext<{
  recipesList: JSX.Element[];
  addRecipe: (title: string, description: string, ingredientsList: string[]) => void;
} | null>(null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const RecipeContextProvider = ({ children }: ContextProps) => {
  const [recipesList, setRecipesList] = useState<JSX.Element[]>([]);

  const addRecipe = (title: string, description: string, ingredientsList: string[]) => {
    const newRecipe: JSX.Element = (
      <Recipe
        title={title}
        description={description}
        ingredients={ingredientsList}
        id={`Recipe No. ${Math.random()}`}
      />
    );
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
