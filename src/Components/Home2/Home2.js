import React from 'react'
import Nav from '../nav/Nav'

import './home2.css'

import car1 from '../../Assets/cars/319624189_575eda65-aff7-41cf-a1db-4866364afe4f.jpg'
import car2 from '../../Assets/cars/green-small-sports-car-coupe-3d-rendering.png'
import car3 from '../../Assets/cars/silver-black-supercar-with-orange-wheels.png'
import car4 from '../../Assets/cars/silver-sports-car-with-hood-up-word-s-side.png'

import FeaturedCars from '../featuredcars/FeaturedCars';
import Features from '../Features/Features';
import Footer from '../footer/Footer';


function Home2() {
  return (
    <div className='home-container'>
        <Nav />
        <div className='maintext'>
            <h2>Your Journey </h2>
            <h2> Your Way</h2>
        </div>
        <div className='car'>
            <img src={car2} alt="car"  className="carimg" data-aos = "slide-left"/>
        </div>

        <FeaturedCars></FeaturedCars>
        <Features></Features>
        <Footer></Footer>
        
    </div>
    
  )
}

export default Home2