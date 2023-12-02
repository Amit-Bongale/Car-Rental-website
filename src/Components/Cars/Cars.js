import {useState, useEffect } from 'react';
import arrow from '../..//Assets/icons/right-arrow.png'

import carslist from '../../Assets/json/carsdata'
import '../featuredcars/Featuredcars.css'
import './cars.css'

import { Link, Outlet } from 'react-router-dom';

function Cars(){

    let [search , setsearch] = useState('')
    let [result , setresult] = useState([])

    useEffect(() => {

        if (search === '') {
            setresult([]);
        } else {
            let data = carslist.cars.filter(car => car.model.toLowerCase().includes(search.toLowerCase()));
            console.log('Filtered data:', data);
            setresult(data);
        }

    }, [search]);

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const renderCars = result.length > 0 ? result : carslist.cars;

    return(

        <div>

            <div className='search-container'>
                <h2>Search Cars </h2>
                <input className='searchbar' type="text" onChange={(val) => setsearch(val.target.value)} value={search} placeholder='Enter car model' />
            </div>
        
            <div className='card-container' id='view-page'>
                {
                    renderCars.map((car) => {
                    
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
        </div>
    );
}

export default Cars