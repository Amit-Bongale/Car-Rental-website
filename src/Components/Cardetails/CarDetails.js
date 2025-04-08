import './CarDetails.css'

import ImageSlider from "../Imageslider/Cardcaurosal";

import star from '../../Assets/icons/star.png'
import heart from '../../Assets/icons/heart.png'
import heartfill from '../../Assets/icons/heartfill.png'


import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';


import arrow from '../../Assets/icons/arrow-white.png'
import driverimage from '../../Assets/icons/driver.jpg'
import Nav from '../nav/Nav';

function Cardetails(){

    let { carid } = useParams();

    let [cardetails,setDetails] = useState({})

    let userid = useSelector((state) => state.user.customer_id)

    let [wishlist , setwishlist] = useState('')
    let [isWishlisted, setIsWishlisted] = useState(false)

    useEffect(()=>{

        let bodyData = {
            "car":carid
        };

        fetch( `${process.env.REACT_APP_API_URL}/cardetails`,
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=> res.json() )
        .then((val)=>{
            console.log(val)
            setDetails(val[0])
        })

        window.scrollTo(0, 0)

    },[carid , userid]);


    useEffect(()=>{

        let bodyData = {
            "customer_id": userid,
            "carid" : carid
        };

        fetch( `${process.env.REACT_APP_API_URL}/checkwishlist`,
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )
        .then((res)=> res.json())
        .then((val)=>{
            console.log(val)
            setIsWishlisted(val[0])
        }

    )},[carid , userid , wishlist ]);
    

    function add(){
     
        let bodyData = { 
            "customer_id": userid,
            "carid" : carid
        };

        fetch(`${process.env.REACT_APP_API_URL}/addwishlist`,
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )
        .then((res)=> res.json())
        .then((val)=> {
            console.log(val)
            // alert("Added to Wishlist");
        })
        setwishlist(true)
    }

    function remove(){
        let bodyData = { 
            "customer_id": userid,
            "carid" : carid
        };

        fetch( `${process.env.REACT_APP_API_URL}/removewishlist`,
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )
        .then((res)=> res.json())
        .then((val)=> {
            console.log(val)
            // alert("Removed from Wishlist");
        })
        setwishlist(false)
    }


    return(

        <>

        <Nav></Nav>

        <div className="cardetails-container">

            <ImageSlider id={cardetails.carid} className='imageslider'></ImageSlider>
                
            <div className="cardetails">
                
                <div className="car-title"> 
                    <h1>{cardetails.model}</h1>
                    {
                        isWishlisted ? (
                            <button className='wishlist-button' onClick={() => remove() }> <img src={heartfill} alt="arrow" height={50}/>
                            </button>)
                        : ( 
                            <button className='wishlist-button' onClick={() => add() }> <img src={heart} alt="arrow" height={50}/>
                            </button>
                        )
                    }
                </div>

                <div className='car-details'>
                    <h2>price: {cardetails.priceperday} rs/Day</h2>
                    <h2> Seats : {cardetails.seats}</h2>
                    <div className='car-ratings'>
                        <h2 className='car-rating-elem'>{cardetails.carrating}</h2> 
                        <img src={star} alt="rating" height={20} className='car-rating-elem'/>
                    </div>
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

export default Cardetails;