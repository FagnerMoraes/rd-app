import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <BrowserRouter>
    <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='empresa' element={<Empresa />} />
          <Route path='contato' element={<Contato />} />
    </Route>
    </Routes>
    </BrowserRouter>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
