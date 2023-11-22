import './css/Herosection.css'

import carimg from '../Assets/images/main-car.png'
import wheel from '../Assets/icons/wheel.png'

import { Link, Outlet } from 'react-router-dom';

function Herosection(){
    return(
        <div className='hero-container flex'>
            <div>
                <div className='text'>

                    <div className='tagline'>
                        <h2 className='tagline-txt'>Your Journey</h2>
                        <h2 className='tagline-txt'>Your Way</h2>
                    </div>

                    <div className='discription'>
                        Welcome to Rides For Rent, where the road to comfort meets unbeatable affordability. Elevate your travel experience with our fleet of meticulously maintained vehicles, designed to provide the utmost comfort at minimal prices. Embark on journeys that redefine your expectations, as we seamlessly blend luxury with savings. Your adventure begins with a click
                    </div>

                    {/* <button className='button'> Discover Cars</button> */}

                    <Link to='/cars'> <button class="button">
                        <img src={wheel} alt="wheel"  class="svgIcon"  />
                        Explore
                    </button> </Link>


                </div>
                
            </div>

            <div className='main-img'>

                <img className="main-car" src={carimg} alt="main img" />

            </div>

            <Outlet></Outlet>
            
        </div>
    );
}

export default Herosection;