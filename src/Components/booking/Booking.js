
import './Booking.css';

import { useState} from 'react';

import wheel from '../../Assets/icons/wheel.png'


function Booking(){ 

    let [name, setname] = useState('')
    let [mobile, setmobile] = useState('')
    let [email, setemail] = useState('')
    let [location, setlocation] = useState('')
    let [time, settime] = useState('')
    let [pickup , setpickup] = useState('')
    let [dropdate, setdrop] = useState('')
    // let [result, setresult] = useState('')
    
    function send(){

        var data = {
            'name':name,
            'mobile':mobile,
            'email':email,
            'location':location,
            'pickuptime':time,
            'pickupdate':pickup,
            'dropdate':dropdate
        }

        try{

            fetch('http://localhost:3000/cars/bookings' ,
            { method :'POST', headers:{'Content-Type' : 'application/json'} ,
                body: JSON.stringify(data) }
            )  .then((res) => res.json())
            //  .then( (data) => { setresult(data)} )
             .catch((error) => {
                console.error('Error:', error);
            });

            alert('Car booked Sucessfully')
        }
        catch (error){
            console.log(error)
        }
    }
  

    
    return(

        <div className='booking-section'>
           
            <div className='booking-container'>

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
                    <img src={wheel} alt="wheel" height={25} />
                    Book Now
                </button>

            </div>

           
        
        </div>
    );
}

export default Booking;