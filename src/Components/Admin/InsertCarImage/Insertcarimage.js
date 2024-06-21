import { useState } from 'react';

import AdminNav from '../AdminNav/AdminNav';

function Insertcarimage() {

    let [carid, setcarid] = useState('');
    let [image , setcarimage] = useState('');

    function send(){

        let data = {
          'carid' : carid,
          'image' : image,
        }
    
    
        try{
          fetch(`http://localhost:3000/insertcarimage` , 
          { method : "POST" , headers:{'Content-Type': 'application/json'} , body:JSON.stringify(data)})
          .then((res) => res.json())
          .then((data) => {
            if (data.message){
              console.log(data.message);
              alert(data.message);
            }
            else if(data.sqlMessage){
              console.log(data.sqlMessage);
              alert(data.sqlMessage);
            }
            console.log(data.results); 
          })
          .catch((error) => console.log(error));
        //   alert('image inserted sucessfully');
        }
        catch (error) {
          console.log("error :", error)
        }
      }

  return (
    <div>Insertcarimage
        <AdminNav></AdminNav>

        <div className="cars-input-container">
        <table className="cars-input-table">

          <tbody>

            <tr className="cars-insert-body" >
              <td className="row">
                <label className="insert-car-label">Car ID</label>
              </td>
              <td className="input-row">
                <input  className="insert-car-input" type="text" required
                onChange={(val) => {setcarid(val.target.value)}} />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-car-label">Image Url</label>
              </td>
              <td>
                <input className="insert-car-input" type="text" required
                onChange={(val) => {setcarimage(val.target.value)}}/>
              </td>
            </tr>

          </tbody>

          <button type="submit" className="insertcar-button" onClick={send}> submit </button>

        </table>

      </div>
    </div>
  )
}

export default Insertcarimage