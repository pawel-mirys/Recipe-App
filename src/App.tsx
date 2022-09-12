import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import { RouterSwitch } from 'app/router/RouterSwitch';
import { RecipeContextProvider } from 'app/contexts/RecipeContext';

function App() {
  return (
    <RecipeContextProvider>
      <BrowserRouter>
        <div id="App">
          <div className="headerContainer">
            <h1>The Recipe App</h1>
            <p>What recipe do you want to save today?</p>
          </div>
          <RouterSwitch />
        </div>
      </BrowserRouter>
    </RecipeContextProvider>
  );
}

export default App;
