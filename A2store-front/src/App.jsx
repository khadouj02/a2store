import React from 'react';
import { useState } from "react";
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './Components/Product/ProductList'; 
import Footer from './Components/Footer/Footer'; 
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import Contact from './Components/Contact/Contact';

function App(){
  const [selectedCategory, setSelectedCategory] = useState(null);


  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
      </Routes> 
    </Router>
    <ProductList /> 
    <AboutPage />
    <Contact />
    <Footer />
    </>
    
  );
};

export default App;
