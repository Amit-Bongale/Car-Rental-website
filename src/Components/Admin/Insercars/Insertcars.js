import { useState } from "react";
import AdminNav from "../AdminNav/AdminNav";

import "./Insertcars.css";

function Insertcars() {

  let [carname, setcarname] = useState("");
  let [drivername , setdrivername] = useState('');
  let [driverrating , setdriverrating] = useState('');
  let [carrating, setcarrating] = useState('');
  let [seats, setseats] = useState('');
  let [priceperday, setprice] = useState('');
  let [mobilenumber ,  setmobilenumber] = useState('')
  let [email, setemail] = useState('')
  let [thumbnail,setthumnail] = useState('')

  function send(){

    let data = {
      'model' : carname,
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
      fetch(`http://localhost:3000/insertcars` , {method : "POST" , headers:{'Content-Type': 'application/json'} ,  body:JSON.stringify(data)})
      .then((res) => res.json())
      .catch((error) => console.log(error));
      alert('Car inserted sucessfully');

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
                <input  className="insert-car-input" type="text" required
                onChange={(val) => {setcarname(val.target.value)}} />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Driver Name</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setdrivername(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Driver Rating</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setdriverrating(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">car Rating</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setcarrating(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Seats</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setseats(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Pricing per Day</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setprice(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Contact Number</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setmobilenumber(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Email</label>
              </td>

              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setemail(val.target.value)}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Thumbnail</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setthumnail(val.target.value)}}/>
              </td>
            </tr>

          </tbody>

          <button type="submit" className="insertcar-button" onClick={send}> submit </button>

        </table>

      </div>

    </div>
  );
}

export default Insertcars;
