import '../css/Contact.css'

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
                    <button className="quick-links">Home</button>
                    <button className="quick-links">Cars</button>
                    <button className="quick-links">Login</button>
                </div>
               
            </div>

            <div className='our-details'>
                <h2>Rides for rent</h2>
                <h2>Mobile no : 795469123</h2>
                <h2>Mail : ridesforride@gmail.com</h2>
                <h2>Location:banglore </h2>
            </div>
            
        </div>
    );
}

export default Contact;