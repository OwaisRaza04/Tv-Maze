import React from 'react';
import { Link } from 'react-router-dom';
import MainCarousel from '../../HomeCarousel/MainCarousel';
import Product from '../../Product/Product';
// import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel';
// import {mens_kurta} from '../../../../Data/mens_kurta';
// import {mens_shirt} from '../../../../Data/mens_shirt';
// import {womens_dress} from '../../../../Data/womens_dress';
// import {womens_saree} from '../../../../Data/womens_saree';
// import {mens_shoes} from '../../../../Data/mens_shoes';



const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div>
        <Product />
      </div>
      {/* <div className='flex flex-col justify-center px-5 py-20 space-y-10 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_shirt} SectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={womens_dress} SectionName={"Women's Dress"}/>
        <HomeSectionCarousel data={womens_saree} SectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={mens_shoes} SectionName={"Men's Shoe"}/>
      </div> */}
      
    </div>
  );
};

export default HomePage;
