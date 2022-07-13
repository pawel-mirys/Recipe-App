import { Recipe } from '../Recipe/Recipe';

export type Recipes = {
  recipes: JSX.Element[];
};

export const recipes: Recipes['recipes'] = [
  <Recipe title="dsasda" description="description" ingredients={['1', '2', '3']} />,
  <Recipe title="xxxxddddd" description="description2222" ingredients={['3', '4', '5']} />,
];
