import React, { lazy, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Footer from './components/Footer';

// const Home = lazy(() => import('./components/Home'));
// const Gallery = lazy(() => import('./components/Gallery'));

const App = () => {
return (
    <div className="bg-black  min-h-screen">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
