import Nav from '../nav/Nav'
import './Booking.css';

import { useState , useEffect} from 'react';

import wheel from '../../Assets/icons/wheel.png'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  Navigate } from 'react-router-dom'


function Booking(){ 

    let { carname } = useParams();

    let loggedin = useSelector((state) => state.user.loggedin)
    let customer_id = useSelector(state => state.user.customer_id);

    let [cardetails,setDetails] = useState({})
    let [carid , setcarid] = useState('')

    let [name, setname] = useState('')
    let [mobile, setmobile] = useState('')
    let [email, setemail] = useState('')
    let [location, setlocation] = useState('')
    let [time, settime] = useState('')
    let [pickup , setpickup] = useState('')
    let [dropdate, setdrop] = useState('')

    let [days , setdays] = useState(0)

    let [price , setprice] = useState()



    useEffect(() => {

        // calculating days
        const start = new Date(pickup);
        const end = new Date(dropdate);

        if (end < start) {
            alert("End date cannot be earlier than the start date. Please choose a valid date range.");
            return;
        }

        // Calculate the difference in milliseconds
        const timeDifference = end - start;

        // Convert milliseconds to days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        console.log(daysDifference)
        setdays(daysDifference)
        
    }, [pickup, dropdate]);


    useEffect(()=>{

        let bodyData = { "car":carname };

        fetch( `${process.env.REACT_APP_API_URL}/cars/carsdata`,
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
                setprice(val[0].priceperday)
                setcarid(val[0].carid)
            }
        )})

    },[carname]);

    // Send Booking Info to Backend
    function send(){

        var data = {
            'customer_id' : customer_id,
            'name':name,
            'mobile':mobile,
            'email':email,
            'location':location,
            'pickuptime':time,
            'pickupdate':pickup,
            'dropdate':dropdate,
            'car_id' : carid,
            'carmodel' : carname
        }

        try{
            fetch(`${process.env.REACT_APP_API_URL}/bookings` ,
            { method :'POST', headers:{'Content-Type' : 'application/json'} ,
                body: JSON.stringify(data) })
            .then((res) => res.json())
            .then((data) => {
                if (data.message){
                    console.log(data.message);
                    alert(data.message);
                }
                else if(data.sqlMessage){
                    console.log(data.sqlMessage);
                    alert(data.sqlMessage);
                }
                console.log(data.results);
            })
            .catch((error) => { console.error('Error:', error); });
        }
        catch (error){
            console.log(error)
        }
    }

    let [totalprice , settotalprice] = useState(price)

    useEffect(() => {
        let calcprice = price * days
        settotalprice(calcprice)
    },[days , price])
  
    
    return(
        <>
            { loggedin ? ( <div> </div>) : ( <Navigate to="/login" />) }
            <Nav></Nav>
            <div className='booking-section'>

                <div className='booking-container'>

                    <div>

                        <div className='booking-text'>

                            <label className='booking-label'>Name</label>
                            <input onChange={(val) => {setname(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
                    
                            <label className='booking-label'>Mobile</label>
                            <input onChange={(val) => {setmobile(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter your Mobile number' />
                    
                            <label className='booking-label'>Email</label>
                            <input  onChange={(val) => {setemail(val.target.value)}} className='booking-inputbar' type="email" placeholder='enter your email' />
                        
                            <div className='times'>
                                <div className='picktimes'>
                                    <label className='booking-label' >From</label>
                                    <input onChange={(val) => {setpickup(val.target.value)}} className='booking-inputbar' id='time' type="date" placeholder='enter pickup time' />
                                </div>
                            
                                <div className='picktimes'>
                                    <label className='booking-label'>To</label>
                                    <input onChange={(val) => {setdrop(val.target.value)}} className='booking-inputbar'   id='time' type="date" placeholder='enter droping time' /> 
                                </div>
                            </div>

                            <label className='booking-label'>Pickup location</label>
                            <input  onChange={(val) => {setlocation(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter pickup Location' />

                            <label className='booking-label'>Pickup time</label>
                            <input onChange={(val) => {settime(val.target.value)}} className='booking-inputbar' type="time" placeholder='enter pickup time' />
                        
                        </div>

                        <button className='button' type='submit' onClick={send}>
                            <img src={wheel} alt="wheel" height={25}  class="svgIcon" />
                            Book Now
                        </button>

                    </div>

                    {/* CALCULTAING PRICE  */}
                    <div className='booking-summery'>
                        <h1>Booking summary</h1>
                        <hr/>
                        <div>
                            <img src={cardetails.thumbnail} alt="car" height={200} style={{borderRadius: 20, marginTop:10}} />
                            <h3>  car name : {cardetails.model}</h3>
                            <h3>  seats : {cardetails.seats}</h3>
                            <h3>  driver name : {cardetails.drivername}</h3>
                        </div>
                        <hr/>
                    
                        <h2>Total Price = {totalprice} rs.</h2>
                    </div>

                </div>
            
            </div>
        </>

    );
}

export default Booking;