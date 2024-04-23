import { useState , useEffect } from "react"

import AdminNav from "../AdminNav/AdminNav";
import './carsimages.css'


function Carimages() {

    let [ carsimage , setcarsimage] = useState([]);

    useEffect(() => {
        try{
            fetch('http://localhost:3000/allcarsimages', {method: 'POST'})
            .then((res) => res.json())
            .then((data) => {console.log('Fetched data:', data); setcarsimage(data)})
            .catch((err) => console.log(err));
        } catch (error){
            console.log(error);
        }
    },[])

  return (
    <div>
        <AdminNav></AdminNav>
        <div className='cars-carimage-container'>
            <table className='carimage-table'>
                <tr>
                    <th className="carimage-table-header">Car Id</th>
                    <th className="carimage-table-header">Images</th>
                    <th className="carimage-table-header"></th>
                </tr>
                {carsimage.map((car , index) => (
                    <tr className="deatils-table-row">
                        <td  className="carimage-table-data">{car.carid}</td>
                        
                        <td className="carimage-table-data" > 
                            <img src={car.image} alt={index} height={80}/>
                        </td>

                        <td>
                            <button className="deletebutton"> Delete </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
        
    </div>
  )
}

export default Carimages