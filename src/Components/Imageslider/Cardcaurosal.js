import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.css'

import arrow from '../../Assets/icons/arrow.png'

const ImageSlider = ( {image1,image2,image3,image4} ) => {

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5500
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        
        <div className='image-slider-container'>

            <button onClick={goToPrev} id='left-arrow-btn'><img src={arrow} alt="left" className='left-arrow' /></button>

            <Slider ref={sliderRef} {...settings} className='slide-container'>

                <div className='slider-image'>
                    <img src={image1} alt="car1" />
                </div>
                <div className='slider-image'>
                    <img src={image2} alt="car2" />
                </div>
                <div className='slider-image'>
                    <img src={image3} alt="car3" />
                </div>
                <div className='slider-image'>
                    <img src={image4} alt="car4" />
                </div>
                {/* Add more slides as needed */}
            
            </Slider>

            <button onClick={goToNext} id='right-arrow-btn'><img src={arrow} alt="right" className='right-arrow'  /></button>

        </div>

    );

};

export default ImageSlider;
