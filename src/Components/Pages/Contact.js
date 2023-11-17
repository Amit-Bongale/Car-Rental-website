import '../css/Contact.css'

import { Link, Outlet } from 'react-router-dom'

import callicon from '../../Assets/icons/call.png'
import locationicon from '../../Assets/icons/location.png'
import emailicon from '../../Assets/icons/mail.png'

function Contact(){

    return(

        <div className="footer-container">

            

            <form className="contact-form">
                <div>
                    <h2>Reach To Us</h2>
                </div>
                
                <div className="names-field">
                    <input type="text" id="firstname"  placeholder="first name" className='name-input'/>
                    <input type="text" id="lastname" placeholder="Last name" className='name-input'/>
                </div>

                <input  type="email" placeholder="Email" className="contact-bar"/>
                <input type="number" placeholder="Mobile number" className="contact-bar"/>
                <input type="text" placeholder="Leave a Message"  id='message-bar' className="contact-bar"/>
                <button type="submit" className="button" id='contact-button'> Submit </button>

            </form>

            <div >

                <h2>Quick Links</h2>
                <div className='Quick-links-container' >
                    <Link to='/Home'> <button className="quick-links">Home</button> </Link>
                    <Link to=''>  <button className="quick-links">Cars</button> </Link>
                    <Link to='/login'> <button className="quick-links"> Login </button> </Link>
                </div>
               
            </div>

            <div className='our-details'>
                <h2>Rides for rent</h2>
                <div className='details'> <img src={callicon} alt="mobileno" height={20} />+91 795469123 </div>
                <div className='details'> <img src={emailicon} alt="email" height={20} /> ridesforride@gmail.com  </div>
                <div className='details'> <img src={locationicon} alt="location" height={20} /> Banglore, Karnataka</div>
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default Contact;