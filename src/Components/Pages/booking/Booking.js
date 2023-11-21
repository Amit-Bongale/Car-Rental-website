import { getValue } from '@testing-library/user-event/dist/utils';
import './Booking.css';

import { useState} from 'react';




function Booking(){

    let [name, setname] = useState([])
    let [mobile, setmobile] = useState('')
    let [email, setemail] = useState('')
    let [location, setlocation] = useState('')
    let [date, setdate] = useState('')
    let [pickup , setpickup] = useState('')
    let [drop, setdrop] = useState('')
    
  

    
    return(
        <div>
            <h2>{name}</h2>
            <div className='booking-container'>

                <div className='booking-text'>

                    <label className='booking-label'>Name</label>
                    <input onChange={(val) => {setname(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
            
                    <label className='booking-label'>Mobile</label>
                    <input onChange={(val) => {setmobile(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
            
                    <label className='booking-label'>Email</label>
                    <input  onChange={(val) => {setemail(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
                
                    <label className='booking-label'>location</label>
                    <input  onChange={(val) => {setlocation(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
                
                    <label className='booking-label'>date</label>
                    <input onChange={(val) => {setdate(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
                
                    <label className='booking-label'>pick up time</label>
                    <input onChange={(val) => {setpickup(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
                
                    <label className='booking-label'>drop time</label>
                    <input onChange={(val) => {setdrop(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />

                </div>

                <div className='booking-image'>
                    <img src="" alt="booking" />
                </div>

              

            </div>

            <button className='button' type='submit'>Book Now</button>
        
        </div>
    );
}

export default Booking;