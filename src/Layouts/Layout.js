import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
};

export default Layout