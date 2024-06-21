import { useState , useEffect } from "react"

import AdminNav from "../AdminNav/AdminNav";
import './carsimages.css'
import { Link } from "react-router-dom";

function Carimages() {

    let [ carsimage , setcarsimage] = useState([]);
    let [car , setcar] = useState('')

    useEffect(() => {
        try{
            fetch('http://localhost:3000/allcarsimages', {method: 'POST'})
            .then((res) => res.json())
            .then((data) => {console.log('Fetched data:', data); setcarsimage(data)})
            .catch((err) => console.log(err));
        } catch (error){
            console.log(error);
        }
    },[car])


    function deleteimage(id , image){

        let bodyData = { 
            "carid":id,
            "image":image
        };

        try {
            fetch('http://localhost:3000/deleteimage',
            { 
                method: "POST" ,
                body:JSON.stringify(bodyData),
                headers: {'Content-Type': 'application/json'}
            })
            .then((res) => res.json())
            .catch(error => {
                console.log('Error fetching data:', error);
            });

            setcar(image);

            alert('Car Image Deleted Sucessfully');

        }
        catch (error) {
          console.error('Error:', error);
        }
    }

  return (
    <div>
        <AdminNav></AdminNav>
        <div className='cars-carimage-container'>
            <Link to={`/admin/insertcarimages`}>
                
                <button className="imageinsertbutton"> Insert</button>
            </Link>
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
                            <button className="deletebutton" onClick={() => deleteimage(car.carid , car.image)}> Delete </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
        
    </div>
  )
}

export default Carimages