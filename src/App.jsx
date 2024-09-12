import React, { lazy, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
// const Home = lazy(() => import('./components/Home'));
// const Gallery = lazy(() => import('./components/Gallery'));

const App = () => {
return (
  
    <div className="bg-black  min-h-screen">
      <Helmet>
        <title>Amar Studio | Professional Photography Services</title>
        <meta
          name="description"
          content="Amar Studio offers professional photography and videography services, including wedding, baby, pre-wedding, retirement, drone, and cinematic videography. Capture your special moments with our expert team."
        />
        <meta name="keywords" content="photography, wedding photography, baby photography, pre-wedding, retirement photos, drone photography, cinematic videography" />
        <meta name="author" content="Amar Studio" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default App;
