import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../css/slider.css'

import arrow from '../../Assets/icons/arrow.png'

const ImageSlider = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className='image-slider-container'>

            <button onClick={goToPrev} id='left-arrow'><img src={arrow} alt="left" height={40} /></button>

            <Slider ref={sliderRef} {...settings} className='slide-container'>

                <div className='slider-image'>
                    <img src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/orlando-toyota-1662757322.png?resize=660:*" alt="Image1" />
                </div>
                <div className='slider-image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKnv0y4vl7fNhkJwW9VeeErHG5CanuAl97eRBPQ_V-Z4AduykXan9eZj61phsa0oHczA&usqp=CAU" alt="Image2" />
                </div>
                <div className='slider-image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI2-zacQBkKj3e01PwrGdIhlmkwCJaV1Ydg&usqp=CAU" alt="Image3" />
                </div>
                {/* Add more slides as needed */}
            
            </Slider>

            <button onClick={goToNext} id='right-arrow'><img src={arrow} alt="right" height={40} /></button>

        </div>

    );

};

export default ImageSlider;
