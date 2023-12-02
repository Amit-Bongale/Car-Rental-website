import './Contact.css'

import { Link, Outlet } from 'react-router-dom'

import logowhite from '../../Assets/Logo/rides for rent logo white.png'
import callicon from '../../Assets/icons/call.png'
import locationicon from '../../Assets/icons/location.png'
import emailicon from '../../Assets/icons/mail.png'

import { useState } from 'react'

function Footer(){

    let [firstname, setfirstname] = useState('')
    let [lastname, setlastname] = useState('')
    let [email, setemail] = useState('')
    let [mobile, setnumber] = useState('')
    let [message, setmessage] = useState('')

    function send(){

        let data = {
            'firstname':firstname,
            'lastname':lastname,
            'email':email,
            'mobile':mobile,
            'message': message
        }

        try{
            fetch('http://localhost:3000/cars/contact', {method:'Post' , headers:{'Content-Type': 'application/json'}, body:JSON.stringify(data)})
            .then((res) => res.json())
            .catch((error) => console.log('Error:',error));
            alert('thanks for contacting')
        }
        catch (error){
            console.log(error)
        }
    }

    return(

        <div className="footer-container" id='contactus'>

            <form className="contact-form">

                <div>
                    <h2>Reach To Us</h2>
                </div>
                
                <div className="names-field">

                    <input type="text" id="firstname"  placeholder="first name" className='name-input' onChange={(val) => { setfirstname(val.target.value) }}/>

                    <input type="text" id="lastname" placeholder="Last name" className='name-input' onChange={(val) => { setlastname(val.target.value) }}/>

                </div>

                <input  type="email" placeholder="Email" className="contact-bar" onChange={(val) => { setemail(val.target.value) }}/>

                <input type="number" placeholder="Mobile number" className="contact-bar" onChange={(val) => { setnumber(val.target.value) }}/>

                <input type="text" placeholder="Leave a Message"  id='message-bar' className="contact-bar" onChange={(val) => { setmessage(val.target.value) }}/>

                <button type="submit" className="button" id='contact-button' onClick={send}> Submit </button>

            </form>

            <div >

                <h2>Quick Links</h2>

                <div className='Quick-links-container' >
                    <Link to='/'> <button className="quick-links">Home</button> </Link>
                    <Link to='/cars'>  <button className="quick-links">Cars</button> </Link>
                    <Link to='/login'> <button className="quick-links"> Login </button> </Link>
                    <Link to='/search'> <button className="quick-links"> search </button> </Link>
                </div>
               
            </div>

            <div className='our-details'>

                <Link to='/'> <div>
                    <img className="logowhite" src={logowhite} alt="logo white" />
                </div> </Link>

                <div className='details'> <img src={callicon} alt="mobileno" height={20} />+91 795469123 </div>
                <div className='details'> <img src={emailicon} alt="email" height={20} /> ridesforride@gmail.com  </div>
                <div className='details'> <img src={locationicon} alt="location" height={20} /> Banglore, Karnataka</div>
                
            </div>

            <Outlet></Outlet>

        </div>
    );
}

export default Footer;