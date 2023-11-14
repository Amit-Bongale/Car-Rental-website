
import car from '../../Assets/images/main-car.png'
import arrow from '../../Assets/icons/right-arrow.png'

import '../css/Featuredcars.css'

// import cars from '../../Assets/json/cars.json'

function FeaturedCars(){

    return(

        <div className='card-container'>
            {/* {cars.map((items,index) => {
                <h1>{items.model}</h1>
            })} */}

            <div className='card'>

                <div className='image-container'>
                    <img src={car} alt="car" />
                </div>
                
                <div className='card-text'>

                    <h2 className='title'>Nisan GTR</h2>
                    <h2>price : 50rs/km</h2>
                    
                    <button className='card-button'>
                        <span>View</span>
                        <img src={arrow} alt="arrow" />
                    </button>

                </div>

            </div>

        </div>

    );

}

export default FeaturedCars;