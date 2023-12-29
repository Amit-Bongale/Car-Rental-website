
import AdminNav from '../AdminNav/AdminNav';
import './deletecars.css'

import arrow from '../../../Assets/icons/arrow-white.png'

import { useState, useEffect } from 'react';
import './deletecars.css'

import Confirmdeletion from '../Confirmdeletion/Confirmdeletion';


function Deletecars() {

    let [carsdata , setcars] = useState([])

    let [popup , setpopup] = useState(false);

    let [carmodel, setcarmodel] = useState('')


    

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
    },[carmodel , popup ])


  return (
    
    <div> 

        <AdminNav></AdminNav>

        { popup && ( <Confirmdeletion model={carmodel} setpopup={setpopup} >
        </Confirmdeletion>) }

        <div className='flex delete-card-container'>

        {

        carsdata.map((car) => (

            <div className='deletecards '> 
            
            <div className='card ' >

                <div className='image-container'>
                    <img src={car.imageurl1} alt="car" />
                </div>
            
                <div className='card-text'>

                    <h2 className='title'>{car.model}</h2>
                    <h2>price : {car.priceperday} rs/Day</h2>
                
                    <button className='card-button' onClick={() => {setpopup(true);
                        setcarmodel(car.model); }}>
                    <span> Delete </span>
                    <img src={arrow} alt="arrow" />
                    </button>
            
                </div>

            </div>
        
        </div>
            
            ))
        }

        </div>  

    </div>
  )
}

export default Deletecars;