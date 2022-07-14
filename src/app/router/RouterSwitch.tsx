import { Routes, Route } from 'react-router-dom';

import { routes } from './routes';
import { Home } from '../pages/Home/Home';
import { RecipeCreator } from '../pages/RecipeCreator/RecipeCreator';

export const RouterSwitch = () => {
  return (
    <Routes>
      <Route path={routes.creator} element={<RecipeCreator />} />
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
};
