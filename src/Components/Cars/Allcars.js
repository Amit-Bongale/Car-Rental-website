import {useState, useEffect } from 'react';
import arrow from '../../Assets/icons/right-arrow.png'

import Nav from '../nav/Nav';

import '../featuredcars/Featuredcars.css'
import './cars.css'

import { Link, Outlet } from 'react-router-dom';


function Allcars(){
    
    let [carsdata, setcars] = useState([])

    let [search , setsearch] = useState('')

    let [result , setresult] = useState([])
    let [carsFound, setCarsFound] = useState(1);

    useEffect(() => {

        try {
            fetch('http://localhost:3000/carsdata', { method: "POST" })
                .then((res) => res.json())
                .then((data) => {
                    console.log('Fetched data:', data);
                    setcars(data);
                })
                .catch(error => {
                    console.log('Error fetching data:', error);
                });
        } catch (error) {
            console.error('Error:', error);
        }
    }, []);
    

    useEffect(() => {

        if (search === '') {
            setresult([]);
            setCarsFound(1)
        } else {
            let data = carsdata.filter(car => car.model.toLowerCase().includes(search.toLowerCase()));
            console.log('Filtered data:', data);
            setresult(data);
            console.log(data.length)
            setCarsFound(data.length);
        }

    }, [search] );


    useEffect(() => {
        window.scrollTo(0, 0)
    },[])


    const renderCars = result.length > 0 ? result : carsdata;


    return(

        <div>

            <Nav></Nav>

            <div className='search-container'>
                <h2>Search Cars </h2>
                <input className='searchbar' type="text" onChange={(val) => setsearch(val.target.value)} value={search} placeholder='Enter car model' />
            </div>
        
            <div className='card-container' id='view-page'>

                {/* set carsFound = 1(true) if cars found, else set to 0(false) */}

                { carsFound ? (

                    renderCars.map((car) => {
                    
                        return(
                            
                            <div className='cards'>
        
                                <div className='card'>
        
                                    <div className='image-container'>
                                        <img src={car.imageurl1} alt="car" />
                                    </div>
                                
                                    <div className='card-text'>
        
                                        <h2 className='title'>{car.model}</h2>
                                        <h2>price : {car.priceperkm} rs/Day</h2>
                                    
                                        <Link to={`cardetails/${car.model}`}><button className='card-button'>
                                            <span> View </span>
                                            <img src={arrow} alt="arrow" />
                                            </button>
                                        </Link>
        
                                    </div>
        
                                </div>
                            
                            </div>
                        
                        );
                    })

                ) : (
                    <p>No cars found</p>
                )}

                <Outlet></Outlet>

            </div>
        </div>
    );
}

export default Allcars;