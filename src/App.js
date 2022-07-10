import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';




function App() {
 
  return (
    
    <div className='App'>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='empresa' element={<Empresa />} />
          <Route path='contato' element={<Contato />} />        
        </Route>        
      </Routes>  
    </BrowserRouter>
    <Outlet />   
    <Footer />
    </div>
  )
}


export default App;
