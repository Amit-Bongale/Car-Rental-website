import Carsdata from '../../Assets/json/carsdata'
import './search.css'


import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import arrow from '../../Assets/icons/arrow.png'

function Search(){
    let [search , setsearch] = useState('')
    let [result , setresult] = useState([])

    // const handlechange = e =>{
    //     setsearch(e.target.value)
    // }

    useEffect(() => {

        if (search === '') {
            setresult([]);
        } else {
            let data = Carsdata.cars.filter(car => car.model.toLowerCase().includes(search.trim().toLowerCase()));
            console.log('Filtered data:', data);
            setresult(data);
        }

    }, [search]);

    return(

        <div>

            <div className='search-container'>
                <h2>Search Car</h2>
                <input className='searchbar' type="text" onChange={(val) => setsearch(val.target.value)} value={search} placeholder='Enter car model' />
            </div>
           
            <div className='card-container' id='search-page'>

                { result.map((car) => {
                    
                    return(
                    
                        <div className='card'>

                            <div className='image-container'>
                                <img src={car.image_urls[0]} alt="car" />
                            </div>
                        
                            <div className='card-text'>

                                <h2 className='title'>{car.model}</h2>
                                <h2>price : {car.price_per_km} rs/km</h2>
                            
                                <Link to={`cardetails/${car.model}`}><button className='card-button'>
                                    <span> View </span>
                                    <img src={arrow} alt="arrow" />
                                    </button>
                                </Link>

                            </div>

                        </div>
                    );
                })}

            </div>

            <Outlet></Outlet>

        </div>
    );
}

export default Search;