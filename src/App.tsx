import React from 'react';
import './App.scss';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import { RouterSwitch } from 'app/router/RouterSwitch';
import { RecipeContextProvider } from 'app/contexts/RecipeContext';
import { LinkButton } from 'ui/LinkButton/LinkButton';

function App() {
  return (
    <RecipeContextProvider>
      <BrowserRouter>
        <div id="App">
          <div className="headerContainer">
            <LinkButton className="header" to={'/'}>
              The Recipe App
            </LinkButton>
            <p>What recipe do you want to save today?</p>
          </div>
          <RouterSwitch />
        </div>
      </BrowserRouter>
    </RecipeContextProvider>
  );
}

export default App;
