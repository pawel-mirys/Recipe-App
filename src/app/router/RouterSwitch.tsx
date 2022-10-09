import { Routes, Route } from 'react-router-dom';

import { routes } from './routes';
import { Home } from 'app/pages/Home/Home';
import { RecipeCreator } from 'app/pages/RecipeCreator/RecipeCreator';
import { RecipePreview } from 'app/pages/RecipePreview/RecipePreview';
import { RecipeEditor } from 'app/pages/RecipeEditor/RecipeEditor';

export const RouterSwitch = () => {
  return (
    <Routes>
      <Route path={routes.creator} element={<RecipeCreator />} />
      <Route path={routes.preview} element={<RecipePreview />} />
      <Route path={routes.preview} element={<RecipeEditor />} />
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
};
