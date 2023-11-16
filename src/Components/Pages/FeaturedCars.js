
import arrow from '../../Assets/icons/right-arrow.png'

import '../css/Featuredcars.css'

import carslist from '../../Assets/json/cars'

function FeaturedCars(){

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
                            <h2>price : {car.price_per_km}$/km</h2>
                            
                            <button className='card-button'>
                                <span>View</span>
                                <img src={arrow} alt="arrow" />
                            </button>

                        </div>

                     </div>
                    
                </div>
                
               );

            })}

            <div>
                <button className='button view-button'> View More</button>
            </div>

        </div>

    );

}

export default FeaturedCars;