import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.css'

import { useState , useEffect } from 'react';

import arrow from '../../Assets/icons/arrow.png'

const ImageSlider = ( {id} ) => {


    let [carimages,setimages] = useState([])

    useEffect(()=>{

        let bodyData = { 'id' : id };

        fetch( 'http://localhost:3000/carsimages',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setimages(val)
            }
        )})

        window.scrollTo(0, 0)

    },[id]);

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
                {carimages.map((car , index) => (
                    <div key={index} className='slider-image'>
                        <img src={car.image} alt="car" />
                    </div>
                ))}
                
                {/* Add more slides as needed */}
            
            </Slider>

            <button onClick={goToNext} id='right-arrow-btn'><img src={arrow} alt="right" className='right-arrow'  /></button>

        </div>

    );

};

export default ImageSlider;
