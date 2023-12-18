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


    // useEffect(() => {
    //     // Dynamically create script elements and add them to the document
    //     const script1 = document.createElement('script');
    //     script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    //     document.head.appendChild(script1);
    
    //     const script2 = document.createElement('script');
    //     script2.src = 'https://mediafiles.botpress.cloud/b5a8718c-3f2f-4c41-b6a0-b6b1ce01ddf5/webchat/config.js';
    //     script2.defer = true;
    //     document.head.appendChild(script2);
    
    //     // Clean up the scripts when the component is unmounted
    //     return () => {
    //       document.head.removeChild(script1);
    //       document.head.removeChild(script2);
    //     };
    //   }, []);

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