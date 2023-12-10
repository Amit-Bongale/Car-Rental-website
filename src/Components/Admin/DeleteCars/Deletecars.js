import React from 'react'
import AdminNav from '../AdminNav/AdminNav';

import { useState, useEffect } from 'react';
import './deletecars.css'

function Deletecars() {

  let [carsdata , setcars] = useState([])

  useEffect(() => {
      try {
          fetch('http://localhost:3000/carsdata', { method: "POST" })
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
  },[])


  return (
    <div> 
        <AdminNav></AdminNav>

        <div className='cars-details-container'>
          
            <table className='details-table'>

              <tr>
                <th className="details-table-header"> </th>
                <th className="details-table-header"> Car Name</th>
                <th className="details-table-header"> Driver Name</th>
                <th className="details-table-header"> Driver Rating</th>
                <th className="details-table-header"> car Rating</th>
                <th className="details-table-header"> Seats</th>
                <th className="details-table-header"> Pricing per km</th>
                <th className="details-table-header"> Contact Number</th>
                <th className="details-table-header"> Email</th>
                <th className="details-table-header"> Image 1</th>
                <th className="details-table-header"> Image 2</th>
                <th className="details-table-header"> Image 3</th>
                <th className="details-table-header"> Image 4</th>
              </tr>
                
              {
                carsdata.map((car) => (
                  
                  <tr className="deatils-table-row">
                    <td className="details-table-data">
                        <button> delete car</button>
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
                        {car.priceperkm}
                    </td>

                    <td className="details-table-data">
                        {car.drivercontact}
                    </td>
                    <td className="details-table-data">
                        {car.driveremail}
                    </td>
                    <td className="details-table-data">
                        <img  src={car.imageurl1} alt="image1" height={40} />
                    </td>
                    <td className="details-table-data">
                            <img  src={car.imageurl2} alt="image1" height={40} />
                    </td>
                    <td className="details-table-data">
                        <img  src={car.imageurl3} alt="image1" height={40} />
                    </td>
                    <td className="details-table-data">
                        <img  src={car.imageurl4} alt="image1" height={40} />
                    </td>
                  </tr>
                  
                ))
              }
                
            </table>
        </div>

    </div>
  )
}

export default Deletecars;