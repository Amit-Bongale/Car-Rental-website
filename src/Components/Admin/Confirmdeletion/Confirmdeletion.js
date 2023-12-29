
import { Link , Outlet} from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './confirmdeletion.css'

import star from '../../../Assets/icons/star.png'



function Confirmdeletion({ model , setpopup}) {


    const handleChildClick = () => {
        setpopup(false);
    };
    

    let [cardetails,setDetails] = useState({})

    useEffect(()=>{

        let bodyData = { 
            "car":model
        };

        fetch( 'http://localhost:3000/cars/carsdata',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setDetails(val[0])
            }
        )})

        window.scrollTo(0, 0)

    },[]);


    function deletecars(){

        let bodyData = { 
            "model":model
        };

        try {
            fetch('http://localhost:3000/deletecar',
            { 
                method: "POST" ,
                body:JSON.stringify(bodyData),
                headers: {'Content-Type': 'application/json'}
            })
            .then((res) => res.json())
            .catch(error => {
                console.log('Error fetching data:', error);
            });

            alert('Car Deleted Sucessfully');

        }
        catch (error) {
          console.error('Error:', error);
        }
    }


    return(

        <div className="Confirmdelete-section">
           
            <div className="deletecar-section">

        

                <img src={cardetails.imageurl1} alt="car" height={300} className="deletecar-image" />

                <div className="deletecardetails-container">
                    
                    <div className="cardetails">
                        
                        <div className="deletecar-title"> 
                    
                            <h1>{cardetails.model}</h1>
                            <div className='car-ratings' id="delterating">
                                <h2 className='car-rating-elem' width={20}>{cardetails.carrating}</h2> 
                                <img src={star} alt="rating" height={20} className='car-rating-elem'/>
                            </div>
                        </div>

                        <div></div>
                        <h2>price: {cardetails.priceperday} rs/km</h2>
                        <h2> Seats : {cardetails.seats}</h2>

                        <hr/>

                        <h2>Do you like to delete this car</h2>
                        
                        <div className="delete-buttons-container">

                            {/* <Link to='/deletecars'> */}
                                <button className='cardelete-button yes' onClick={() => {deletecars();   handleChildClick();} }> yes </button>
                            {/* </Link> */}
                        
                            {/* <Link to='/deletecars'> */}
                                <button className='cardelete-button no' onClick={() => handleChildClick()}> No </button>
                                
                            {/* </Link> */}

                        </div>
                        
                    </div>

                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );

}

export default Confirmdeletion