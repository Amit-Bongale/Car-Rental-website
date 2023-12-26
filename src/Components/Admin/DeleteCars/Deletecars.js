
import AdminNav from '../AdminNav/AdminNav';
import './deletecars.css'

import arrow from '../../../Assets/icons/arrow-white.png'

import { useState, useEffect } from 'react';
import { Link , Outlet } from 'react-router-dom';
import './deletecars.css'


function Deletecars() {

    let [carsdata , setcars] = useState([])

    // let [carmodel , setcarmodel] = useState('')

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



   // function deletecars(model){

        // console.log(`Deleting car with model: ${model}`);

        // let carsmodel1 = model

        // console.log(carsmodel1)
        
    

        // try {
        //     fetch('http://localhost:3000/deletecars', { method: "POST" , headers: {
        //     'Content-Type': 'application/json'} , body: JSON.stringify({ model: carmodel }) })
        //     .then((res) => res.json())
        //     .catch(error => {
        //         console.log('Error fetching data:', error);
        //     });


        //     alert('Car Deleted Sucessfully');
        //     const result =  response.text();
        //     alert(result);
            
        // } catch (error) {
        //   console.error('Error:', error);
        // }
    // }

   


  return (
    
    <div> 
        <AdminNav></AdminNav>

        {/* <div className='cars-details-container'> */}
          
            {/* <table className='details-table'>

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
                  
                  <tr className="deatils-table-row" >
                        <Link to={`/confirmdelete/${car.model}`}>
                            <button onClick={console.log('clicked car')}> delete car </button>
                        </Link>
                    <td className="details-table-data">
                        
                    </td>
                    <td className="details-table-data" >
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
                
            </table> */}

        <div className='flex delete-card-container'>

        {

        carsdata.map((car) => (

            

        <div className='deletecards  '> 
        
        <div className='card ' >

            <div className='image-container'>
                <img src={car.imageurl1} alt="car" />
            </div>
        
            <div className='card-text'>

                <h2 className='title'>{car.model}</h2>
                <h2>price : {car.priceperday} rs/Day</h2>
            
                <Link to={`/confirmdelete/${car.model}`}>
                    <button className='card-button'>
                    <span> Delete </span>
                    <img src={arrow} alt="arrow" />
                    </button>
                </Link>

            </div>

        </div>
    
    </div>

            


            

            ))
            }

</div>
            
       

       

        <Outlet></Outlet>

    </div>
  )
}

export default Deletecars;