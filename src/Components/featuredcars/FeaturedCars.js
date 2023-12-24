
import arrow from '../../Assets/icons/right-arrow.png'
import { Outlet, Link } from 'react-router-dom';

import './Featuredcars.css'

import carslist from '../../Assets/json/cars'

function FeaturedCars(){

    return(
    <>
        <div className='card-container'>
            <div className='cards'>
            { carslist.cars.map((car, index) => {
                
                return(
                 
                 <div key={index} >
 
                    <div className='card'  data-aos='zoom-in-up' data-aos-duration='350'
                    data-aos-delay= {car.aosDelay} >
 
                        <div className='image-container'>
                            <img src={car.image_urls[0]} alt="car" />
                        </div>
                         
                        <div className='card-text'>
 
                            <h2 className='title'>{car.model}</h2>
                            <h2>price : {car.price_per_km} rs/Day</h2>
                            
                            <Link to={`cardetails/${car.model}`}><button className='card-button'>
                            <span> View </span>
                            <img src={arrow} alt="arrow" />
                            </button> </Link>
 
                        </div>
 
                    </div>
                     
                 </div>
                 
                );
 
             })}
            </div>

           

            <div>
            <Link to='/cars'> <button className='button view-button'> View More</button></Link>
            </div>

        </div>
        <Outlet></Outlet>
    </>
    );

}

export default FeaturedCars;