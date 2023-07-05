import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route element={ <Header /> } />
        <Route  element={ <Home /> } />
        <Route element={ <Footer /> } />
        <Route element={ <Sidebar /> } />
    </Routes>
  )
}
