
import arrow from '../../Assets/icons/right-arrow.png'
import { Outlet, Link } from 'react-router-dom';

import './Featuredcars.css'

// import carslist from '../../Assets/json/cars'
import { useState , useEffect} from 'react';

function FeaturedCars(){

    let [cars, setcars] = useState([]);

    useEffect(() => {
        try{
            fetch('http://localhost:3000/featuredcars' , {method : 'POST'})
            .then(res => res.json())
            .then(data => { console.log(data) ; setcars(data)})
            .catch(error => console.log(error));
        } catch (error){
            console.log(error);
        }
    },[])

    return(
    <>
        <div className='card-container'>
            <div className='cards'>
            { cars.map((car, index) => {
                
                return(
                 
                 <div key={index} >
 
                    <div className='card'  data-aos='zoom-in-up' data-aos-duration='350'
                    data-aos-delay= {car.aosDelay} >
 
                        <div className='image-container'>
                            <img src={car.thumbnail} alt="car" />
                        </div>
                         
                        <div className='card-text'>
 
                            <h2 className='title'>{car.model}</h2>
                            <h2>price : {car.priceperday} rs/Day</h2>
                            
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