import { createContext, useState } from 'react';

import { Recipe } from 'app/Components/Recipe/Recipe';

export const RecipeContext = createContext<{
  recipes: JSX.Element[];
  addRecipe: () => void;
  useTitle: (title: string) => void;
  useDescription: (description: string) => void;
  useIngredients: (ingredients: string) => void;
} | null>(null);

const RecipeProvider = (children: JSX.Element) => {
  const [recipes, setRecipes] = useState<JSX.Element[]>([]);
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState<string[]>([]);

  const useTitle = (newTitle: string) => {
    setRecipeTitle(newTitle);
  };
  const useDescription = (newDescription: string) => {
    setRecipeDescription(newDescription);
  };
  const useIngredients = (ingredient: string) => {
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
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, useTitle, useDescription, useIngredients }}>
      {children}
    </RecipeContext.Provider>
  );
};
