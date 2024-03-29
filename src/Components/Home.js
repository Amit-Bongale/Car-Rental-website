import '../App.css'

import Herosection from './Herosection/Herosection';
import FeaturedCars from './featuredcars/FeaturedCars';
import Features from './Features/Features';
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import { useEffect } from 'react';


function Home(){

    useEffect(() => {
      window.scrollTo(0,0)
    },[])


    return(
        <div>
            <Nav></Nav>
            <Herosection></Herosection>
            <FeaturedCars></FeaturedCars>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
}

export default Home;