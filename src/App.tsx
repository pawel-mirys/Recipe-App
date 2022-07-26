import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import { RouterSwitch } from 'app/router/RouterSwitch';

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <div className="headerContainer">
          <h1>The Recipe App</h1>
          <p>What recipe do you want to save today?</p>
        </div>
        <RouterSwitch />
      </div>
    </BrowserRouter>
  );
}

export default App;
