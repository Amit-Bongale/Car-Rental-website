import { useState, useEffect } from 'react';
import AdminNav from "../AdminNav/AdminNav";

import { useParams } from 'react-router-dom';

function Updatecars() {

    // let [carsdata , setcars] = useState([])
    // let [popup , setpopup] = useState(false);
    // let [carmodel, setcarmodel] = useState('');

    let {model} = useParams();
    console.log(model);


    let [drivername , setdrivername] = useState('');
    let [driverrating , setdriverrating] = useState('');
    let [carrating, setcarrating] = useState('');
    let [seats, setseats] = useState('');
    let [priceperday, setprice] = useState('');
    let [mobilenumber ,  setmobilenumber] = useState('')
    let [email, setemail] = useState('')
    let [thumbnail , setthumbnail] = useState('')

    
    useEffect(()=>{

      let bodyData = { 
        'car':model
      };

      fetch( 'http://localhost:3000/cars/carsdata',
        {
          method:"POST",
          body:JSON.stringify(bodyData),
          headers: { 'Content-Type': 'application/json'},
        },
      )

      .then((res)=> res.json())
      .then((val)=>{
        console.log(val)
        setdrivername(val[0].drivername)
        setdriverrating(val[0].driverrating)
        setcarrating(val[0].carrating)
        setseats(val[0].seats)
        setprice(val[0].priceperday)
        setmobilenumber(val[0].drivercontact)
        setemail(val[0].driveremail)
        setthumbnail(val[0].thumbnail)
      })

    },[model]);

  

  function send(){

    let data = {
      'model':model,
      'drivername' : drivername,
      'driverrating': driverrating,
      'carrating': carrating, 
      'seats':seats,
      'priceperday': priceperday,
      'drivercontact':mobilenumber,
      'driveremail': email, 
      'thumbnail' : thumbnail
    }


    try{
      fetch(`http://localhost:3000/updatecars` ,
      {method : "POST" , headers:{'Content-Type': 'application/json'} ,  body:JSON.stringify(data)})
      .then((res) => res.json())
      .catch((error) => console.log(error));
      alert('Car Updated sucessfully');

    }
    catch (error) {
      console.log("error :", error)
    }
  }



  return (
    <div className="container-admin">
      <AdminNav></AdminNav>

      <div className="cars-input-container">
        <table className="cars-input-table">

          <tbody>

            <tr className="cars-insert-body" >
              <td className="row">
                <label className="insert-car-label">Car Model</label>
              </td>
              <td className="input-row">
                {model}
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Driver Name</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required value={drivername}
                onChange={(val) => {setdrivername(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Driver Rating</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required value={driverrating}
                onChange={(val) => {setdriverrating(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">car Rating</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required value={carrating}
                onChange={(val) => {setcarrating(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Seats</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" required value={seats}
                onChange={(val) => {setseats(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Pricing per Day</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required value={priceperday}
                onChange={(val) => {setprice(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Contact Number</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" required value={mobilenumber}
                onChange={(val) => {setmobilenumber(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Email</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" required value={email}
                onChange={(val) => {setemail(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Thumbnail</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required value={thumbnail}
                onChange={(val) => {setthumbnail(val.target.value)}}/>
              </td>
            </tr>

          </tbody>

          <button type="submit" className="insertcar-button" onClick={send}> Update </button>

        </table>

      </div>

    </div>
  )
}

export default Updatecars;
