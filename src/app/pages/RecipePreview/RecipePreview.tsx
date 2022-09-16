import { useContext } from 'react';

import { RecipeContext } from 'app/contexts/RecipeContext';

type RecipePreviewProps = {
  title: string;
  description: string;
  ingredients: string[];
};

export const RecipePreview = () => {
  const context = useContext(RecipeContext);
  return <div></div>;
};
