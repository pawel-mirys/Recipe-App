import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { RouterSwitch } from './app/router/RouterSwitch';

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <RouterSwitch />
      </div>
    </BrowserRouter>
  );
}

export default App;
