import { useEffect, useState } from "react"
import AdminNav from "../AdminNav/AdminNav"

import './admincardetails.css'
import { Link } from "react-router-dom";

import Confirmdeletion from "./Confirmdeletion/Confirmdeletion";

function AdminCardetails() {

    let [carsdata , setcars] = useState([]);

    let [popup , setpopup] = useState(false);
    let [carmodel, setcarmodel] = useState('')


    useEffect(() => {
        try {
            fetch(`${process.env.REACT_APP_API_URL}/carsdata`, { method: "POST" })
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setcars(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    },[popup])

  return (
    <div> 
        <AdminNav></AdminNav>

        { popup && ( <Confirmdeletion model={carmodel} setpopup={setpopup} >
        </Confirmdeletion>) }

        <div className='cars-details-container'>
          
            <table className='details-table'>

                <tr>
                    <th className="details-table-header"> Car ID</th>
                    <th className="details-table-header"> Car Name</th>
                    <th className="details-table-header"> Driver Name</th>
                    <th className="details-table-header"> Driver Rating</th>
                    <th className="details-table-header"> car Rating</th>
                    <th className="details-table-header"> Seats</th>
                    <th className="details-table-header"> Pricing</th>
                    <th className="details-table-header"> Contact Number</th>
                    <th className="details-table-header"> Email</th>
                    <th className="details-table-header"> Thumbnail</th>
                    <th className="details-table-header"> </th>
                    <th className="details-table-header"> </th>
                </tr>
                
                {
                    carsdata.map((car) => (
                     
                        <tr className="deatils-table-row">

                            <td className="details-table-data">
                                {car.carid} 
                            </td>
                            <td className="details-table-data">
                                {car.model} 
                            </td>
                            <td className="details-table-data">
                                {car.drivername}
                            </td>
                            <td className="details-table-data">
                                {car.driverrating}
                            </td>
                            <td className="details-table-data">
                                {car.carrating}
                            </td>

                            <td className="details-table-data">
                                {car.seats}
                            </td>
                            <td className="details-table-data">
                                {car.priceperday}
                            </td>

                            <td className="details-table-data">
                                {car.drivercontact}
                            </td>
                            <td className="details-table-data">
                                {car.driveremail}
                            </td>
                            <td className="details-table-data">
                                <img  src={car.thumbnail} alt="image1" height={40} />
                            </td>
                        
                            <td className="details-table-data">
                                <Link to={`/admin/UpdateDetails/${car.model}`}>
                                    <button className="Updatebutton">Update</button>
                                </Link>
                            </td>

                            <td>
                                <button className="deletebutton"  onClick={() => {setpopup(true);
                                setcarmodel(car.model); }}> Delete </button>
                            </td>

                        </tr>
                     
                    ))
                }
                
            </table>
        </div>

    </div>

  )
}

export default AdminCardetails