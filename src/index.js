import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Accueil from '../src/pages/Accueil';
import Apropos from './pages/A propos';
import Error from './pages/Error'
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={ <Accueil/> }/>
        <Route path='/a-propos' element={ <Apropos/> }/>
        <Route path='/*' element={ <Error/> }/>
      </Routes>
      <Footer/>
    </Router>
  <GlobalStyles />
  </React.StrictMode>
);