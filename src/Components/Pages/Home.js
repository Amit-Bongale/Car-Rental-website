import '../../App.css'

import Herosection from '../Herosection';
import FeaturedCars from '../Pages/FeaturedCars';
import Features from '../Pages/Features';
import Contact from '../Pages/Contact';

function Home(){
    return(
        <div>
            <Herosection></Herosection>
            <FeaturedCars></FeaturedCars>
            <Features></Features>
            <Contact></Contact>
        </div>
    );
}

export default Home;