import Nav from "../../nav/Nav"

import { useState , useEffect } from "react"

import { useSelector ,  } from "react-redux"

import { Navigate } from "react-router-dom"

function Userbookings() {

    let [details , setdetails] = useState([])

    const userid = useSelector((state) => state.user.customer_id)
    const loggedin = useSelector((state) => state.user.loggedin)

    useEffect(() => {

        let data = {
            "customer_id": userid
        }

        try {
            fetch('http://localhost:3000/customerbookingdetails',
                {   method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            )
            .then((res) => res.json())
            .then((data) => {
                console.log('Fetched data:', data);
                setdetails(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }, [userid]);

    return (
        <div>
            { loggedin ? (<></>) : <Navigate to="/"></Navigate>}

            <Nav></Nav>
            <div>
                <h1> My Bookings</h1>
                <div className=''>
          
                <table className='details-table'>

                    <tr>
                        <th className="details-table-header"> Car id</th>
                        <th className="details-table-header"> Car Model</th>
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
        </div>
    )
}

export default Userbookings