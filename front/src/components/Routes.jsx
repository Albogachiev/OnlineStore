import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './Home/Home';
import SingleProduct from './SingleProduct/SingleProduct';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path={'/products/:id'} element={ <SingleProduct /> } />
        <Route index element={<Home />} />
    </Routes>
  )
}
