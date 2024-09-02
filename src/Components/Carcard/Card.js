import React from 'react'
import './card.css'

import arrow from '../../Assets/icons/right-arrow.png'

import { Link } from 'react-router-dom'
  
function Card({car}) {
  return (
    <div className='cards'>
        
        <div className='card' data-aos='zoom-in-down' data-aos-duration='400'
            data-aos-delay= {car.aosDelay}>

            <div className='image-container'>
                <img src={car.thumbnail} alt="car" />
            </div>
        
            <div className='card-text'>

                <h2 className='title'>{car.model}</h2>
                <h2>price : {car.priceperday} rs/Day</h2>
            
                <Link to={`/cardetails/${car.carid}`}><button className='card-button'>
                    <span> View </span>
                    <img src={arrow} alt="arrow" />
                    </button>
                </Link>

            </div>

        </div>
    
    </div>
  )
}

export default Card