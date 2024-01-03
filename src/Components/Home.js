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

    // let botpressScript;
    // let configScript;

    // useEffect(() => {
    //     const loadBotpress = async () => {
    //       try {
    //         // Create script element for Botpress webchat library
    //         botpressScript = document.createElement('script');
    //         botpressScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    //         document.body.appendChild(botpressScript);
    
    //         // Wait for the library script to load before proceeding
    //         await new Promise((resolve, reject) => {
    //           botpressScript.onload = resolve;
    //           botpressScript.onerror = reject;
    //         });
    
    //         // Create script element for Botpress webchat configuration
    //         configScript = document.createElement('script');
    //         configScript.src = 'https://mediafiles.botpress.cloud/b5a8718c-3f2f-4c41-b6a0-b6b1ce01ddf5/webchat/config.js';
    //         configScript.defer = true;
    //         document.body.appendChild(configScript);
    
    //         // Wait for the configuration script to load before proceeding
    //         await new Promise((resolve, reject) => {
    //           configScript.onload = resolve;
    //           configScript.onerror = reject;
    //         });
    //       } catch (error) {
    //         console.error('Error loading Botpress:', error);
    //         // Handle the error (e.g., show an error message)
    //       }
    //     };
    
    //     // Call the async function to load Botpress scripts
    //     loadBotpress();
    
    //     // Cleanup: Remove script elements when component unmounts
    //     return () => {
    //       if (botpressScript && botpressScript.parentNode) {
    //         botpressScript.parentNode.removeChild(botpressScript);
    //       }
    //       if (configScript && configScript.parentNode) {
    //         configScript.parentNode.removeChild(configScript);
    //       }
    //     };
        
    //   }, []); // Empty dependency array ensures that the effect runs only once on mount
    



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