
import './Booking.css';

import { useState} from 'react';


function Booking(){ 

    let [name, setname] = useState('')
    let [mobile, setmobile] = useState('')
    let [email, setemail] = useState('')
    let [location, setlocation] = useState('')
    let [date, setdate] = useState('')
    let [pickup , setpickup] = useState('')
    let [droptime, setdrop] = useState('')
    let [result, setresult] = useState('')
    
    function send(){
        var data = {
            'name':name,
            'mobile':mobile,
            'email':email,
            'location':location,
            'date':date,
            'pickup':pickup,
            'droptime':droptime
        }

        try{

            fetch('http://localhost:3000/cars/bookings' ,
            { method :'POST', headers:{'Content-Type' : 'application/json'} ,
                body: JSON.stringify(data) }
            )  .then((res) => res.json())
             .then( (data) => { setresult(data)} )
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

        <div>
           
            <div className='booking-container'>

                <div className='booking-text'>

                    <label className='booking-label'>Name</label>
                    <input onChange={(val) => {setname(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
            
                    <label className='booking-label'>Mobile</label>
                    <input onChange={(val) => {setmobile(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter your Mobile number' />
            
                    <label className='booking-label'>Email</label>
                    <input  onChange={(val) => {setemail(val.target.value)}} className='booking-inputbar' type="email" placeholder='enter your email' />
                
                    <label className='booking-label'>Pickup location</label>
                    <input  onChange={(val) => {setlocation(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter pickup Location' />
                
                    <label className='booking-label'>date</label>
                    <input onChange={(val) => {setdate(val.target.value)}} className='booking-inputbar' type="date" placeholder='enter pickup date' />
                
                    <label className='booking-label'>pick up time</label>
                    <input onChange={(val) => {setpickup(val.target.value)}} className='booking-inputbar' type="time" placeholder='enter pickup time' />
                
                    <label className='booking-label'>drop time</label>
                    <input onChange={(val) => {setdrop(val.target.value)}} className='booking-inputbar' type="time" placeholder='enter droping time' />

                </div>

                <div className='booking-image'>
                    {/* <img src="" alt="booking" /> */}
                </div>


            </div>

            <button className='button' type='submit' onClick={send}>Book Now</button>
        
        </div>
    );
}

export default Booking;