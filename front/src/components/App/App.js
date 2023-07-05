import React from 'react';

import { AppRoutes } from '../Routes';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className='container'> 
      <Sidebar />
      <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}
