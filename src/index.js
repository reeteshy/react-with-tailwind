import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import AppData from './utils/Constants';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const AppContext = createContext()
root.render(
  <BrowserRouter >
  <AppContext.Provider value={AppData}>
    <App />
    </AppContext.Provider>
  </BrowserRouter>
);