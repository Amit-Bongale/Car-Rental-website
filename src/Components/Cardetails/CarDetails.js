import './CarDetails.css'

import ImageSlider from "../Imageslider/Cardcaurosal";

import star from '../../Assets/icons/star.png'


import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';


import arrow from '../../Assets/icons/arrow-white.png'
import driverimage from '../../Assets/icons/driver.jpg'
import Nav from '../nav/Nav';

function FeaturedCardetails(){

    let { carid } = useParams();

    let [cardetails,setDetails] = useState({})

    useEffect(()=>{

        let bodyData = { "car":carid
        };

        fetch( 'http://localhost:3000/cardetails',
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

        window.scrollTo(0, 0)

    },[carid]);


    return(

        <>

        <Nav></Nav>

        <div className="cardetails-container">

            <ImageSlider id={cardetails.carid} className='imageslider'></ImageSlider>
                
            <div className="cardetails">
                
                <div className="car-title"> 
                    <h1>{cardetails.model}</h1>
                    <div className='car-ratings'>
                        <h2 className='car-rating-elem'>{cardetails.carrating}</h2> 
                        <img src={star} alt="rating" height={20} className='car-rating-elem'/>
                    </div>
                </div>

                <div className='car-details'>
                    <h2>price: {cardetails.priceperday} rs/Day</h2>
                    <h2> Seats : {cardetails.seats}</h2>
                </div>
        
                <Link to={`/booking/${cardetails.model}`}>
                <button className='car-booking-button'> Rent Now <img src={arrow} alt="arrow" height={10}/>
                </button></Link>
            </div>

            <div className='driver-details-container'>

                <div className='driver-image'>
                    <img src={driverimage}  height={150} alt="driver" />   
                </div>
                
                <div className='driver-details' >
                    <h2>Name: {cardetails.drivername}</h2>
                    <h2>Mobile no: {cardetails.drivercontact}</h2>
                    <h2>Email: {cardetails.driveremail}</h2>
                    <h2>Ratings: {cardetails.driverrating}</h2>
                </div>
                
            </div>

            <Outlet></Outlet>
        </div>
        </>
    );
}

export default FeaturedCardetails;