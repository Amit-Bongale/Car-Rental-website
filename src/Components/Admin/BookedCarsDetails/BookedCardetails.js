import { useState, useEffect } from 'react'
import AdminNav from '../AdminNav/AdminNav'

function BookedCardetails() {

    let [details , setdetails] = useState([])

    useEffect(() => {
        try{
            fetch('http://localhost:3000/bookingdetails' , {method : 'POST'})
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setdetails(data)})
            .catch((error) => console.log(error))
        }
        catch (error){
            console.log(error)
        }
    },[])

  return (
    <div>
        <AdminNav></AdminNav>

        <div className='cars-details-container'>
          
          <table className='details-table'>

            <tr>
                <th className="details-table-header"> Car id</th>
                <th className="details-table-header"> Car Model</th>
                <th className="details-table-header"> Customer ID</th>
                <th className="details-table-header"> Customer Name</th>
                <th className="details-table-header"> Mobile </th>
                <th className="details-table-header"> Email</th>
                <th className="details-table-header"> Location</th>
                <th className="details-table-header"> Pickup Time</th>
                <th className="details-table-header"> Pickup Date</th>
                <th className="details-table-header"> Drop Date</th>
               
            </tr>
            
            {
                details.map((booking) => (
                
                    <tr className="deatils-table-row"> 

                        <td className="details-table-data">
                            {booking.car_id}
                        </td>
                        <td className="details-table-data">
                            {booking.carmodel}
                        </td>
                        <td className="details-table-data">
                            {booking.customer_id}
                        </td>
                        <td className="details-table-data">
                            {booking.name} 
                        </td>
                        <td className="details-table-data">
                            {booking.mobile}
                        </td>
                        <td className="details-table-data">
                            {booking.email}
                        </td>
                        <td className="details-table-data">
                            {booking.location}
                        </td>
                        <td className="details-table-data">
                            {booking.pickuptime}
                        </td>
                        <td className="details-table-data">
                            {booking.pickupdate}
                        </td>
                        <td className="details-table-data">
                            {booking.dropdate}
                        </td>
            
                    </tr>
                
                ))
            }
              
          </table>
        </div>
        
        
    </div>
  )
}

export default BookedCardetails