import './Details.css'

import ImageSlider from "../Cardcaurosal";

// import carslist from '../../Assets/json/cars';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


import arrow from '../../../Assets/icons/arrow.png'
import driverimage from '../../../Assets/icons/driver.jpg'

function Cardetails(){

    let { carname } = useParams();

    let [cardetails,setDetails] = useState({})

    useEffect(()=>{

        let bodyData = { "car":carname
        };

        fetch( 'http://localhost:3000/cars',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setDetails(val[0])
            }
        )})

    },[]);


    return(

        <div className="cardetails-container">

            <ImageSlider image1={cardetails.imageurls}></ImageSlider>
                
            <div className="cardetails">
                
                <div className="car-title"> 
                    <h2>{cardetails.model}</h2>
                    <h2>{cardetails.carrating}</h2>
                </div>

                <h2>price: {cardetails.priceperkm} rs/km</h2>
                <h2> Seats : {cardetails.seats}</h2>

                <button className='car-booking-button'> Book Now <img src={arrow} alt="arrow" height={10}/>
                </button>
                {/* <img src={cardetails.imageurls} alt="car" /> */}
            </div>

            <div className='driver-details-container'>

                <div className='driver-image'>
                    <img src={driverimage}  height={150} alt="driver" />   
                </div>
                
                <div className='driver-details' >
                    <h2>{cardetails.drivername}</h2>
                    <h2>{cardetails.driverrating}</h2>
                    <h2>{cardetails.drivercontact}</h2>
                    <h2>{cardetails.driveremail}</h2>
                </div>
                
            </div>
        
        </div>
    );
}

export default Cardetails;