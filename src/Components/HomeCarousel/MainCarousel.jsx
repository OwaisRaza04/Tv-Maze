import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';





const MainCarousel = () => {

    let items = MainCarouselData.map((item) => <img src={item.image} 
    className='z-0 cursor-pointer h-[17rem] w-full' role='presentation' alt=''></img>)   
    
    return(
        <AliceCarousel
        items={items}
        autoPlayInterval={1000}
        infinite={true}
        autoPlayDirection="rtl"
        autoPlay={true}
        disableButtonsControls={true}
        
        />
        )

    };

export default MainCarousel;

