import arrow from '../../../Assets/icons/right-arrow.png'

import carslist from '../../../Assets/json/carsdata'
import '../../css/Featuredcars.css'

import { Link, Outlet } from 'react-router-dom';

function Cars(){
    return(

        <div className='card-container'>
            {carslist.cars.map((car,index) => {
                
                return(
                 
                    <div>
 
                        <div className='card'>
 
                            <div className='image-container'>
                                <img src={car.image_urls[0]} alt="car" />
                            </div>
                         
                            <div className='card-text'>
 
                                <h2 className='title'>{car.model}</h2>
                                <h2>price : {car.price_per_km}rs/km</h2>
                             
                                <Link to={`cardetails/${car.model}`}><button className='card-button'>
                                    <span> View </span>
                                    <img src={arrow} alt="arrow" />
                                    </button>
                                </Link>
 
                            </div>
 
                        </div>
                     
                    </div>
                 
                );
 
            })}

            <Outlet></Outlet>

        </div>
    );
}

export default Cars