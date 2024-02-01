import React from 'react';
import { Link } from 'react-router-dom';
import MainCarousel from '../../HomeCarousel/MainCarousel';
import Product from '../../Product/Product';



const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div>
        <Product />
      </div>
      
      
    </div>
  );
};

export default HomePage;
