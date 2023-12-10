import React from 'react'
import AdminNav from '../AdminNav/AdminNav';

import './deletecars.css'

function Deletecars() {
  return (
    <div> 
        <AdminNav></AdminNav>

        <div className='cars-details-container'>
        <table className='details-table'>
            <thead>
                <th>Car Name</th>
                <th>Driver Name</th>
                <th>Driver Rating</th>
                <th>car Rating</th>
                <th>Seats</th>
                <th>Pricing per km</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Image 1</th>
                <th>Image 2</th>
                <th>Image 3</th>
                <th>Image 4</th>
            </thead>
            <tbody>
                <tr>
                <td >
                   model
                </td>
                <td >
                   car name
                </td>
                </tr>
            </tbody>
        </table>
        </div>

    </div>
  )
}

export default Deletecars;