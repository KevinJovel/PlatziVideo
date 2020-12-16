import React from 'react';
import Header from './Header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Layout;
