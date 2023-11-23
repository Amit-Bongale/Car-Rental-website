import '../../App.css'

import Herosection from '../Herosection';
import FeaturedCars from '../Pages/FeaturedCars';
import Features from '../Pages/Features';
import Footer from './Footer';

import { useEffect } from 'react';

function Home(){

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div>
            <Herosection></Herosection>
            <FeaturedCars></FeaturedCars>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
}

export default Home;