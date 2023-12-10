
import Nav from '../nav/Nav'
import './contactus.css'

import { useState } from 'react'

function Contactus(){

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
        <>
        <Nav></Nav>
        <div className="contactus-outer-container">
            <div className="contactus-main-container">
                <div className="contact-container">

                    <div>
                        <h2>Contact us</h2>
                    </div>

                    <div className="contact_form">
                        <div className="input-container">
                            <label>First name</label>
                            <input type="text" onChange={(val) => { setfirstname(val.target.value)}} />
                        </div>
                        <div className="input-container">
                            <label>Last name</label>
                            <input type="text"  onChange={(val) => { setlastname(val.target.value)}} />
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input type="email"  onChange={(val) => { setemail(val.target.value)}} />
                        </div>
                        <div className="input-container">
                            <label>Mobile number</label>
                            <input type="text"   onChange={(val) => { setnumber(val.target.value)}}/>
                        </div>
                        <div className="input-container">
                            <label>Message</label>
                            <input type="text"   onChange={(val) => { setmessage(val.target.value)}}/>
                        </div>
                    </div>

                    <div className="submit-container">
                        <button className="submit_button" onClick={send}>Submit</button>
                    </div>

                </div>

                <div className="contact-side-image">

                    <div className="contactus-quote-container">
                        <h2>Experience the thrill of miles and smiles!</h2>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Contactus;