import { useState, useEffect } from "react";

import './confirmdeletion.css'

import star from '../../../../Assets/icons/star.png'


function Confirmdeletion({model , setpopup}) {

    const handleclick = () => {
        setpopup(false);
    };

    let [cardetails,setDetails] = useState({})

    useEffect(()=>{

        let bodyData = { 
            "car":model
        };

        fetch( `${process.env.REACT_APP_API_URL}/cars/carsdata`,
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
            fetch(`${process.env.REACT_APP_API_URL}/deletecar`,
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

                <img src={cardetails.thumbnail} alt="car" height={300} className="deletecar-image" />

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
                           
                            <button className='cardelete-button yes'
                            onClick={() => {deletecars();   handleclick();} }> yes </button>
                                                
                            <button className='cardelete-button no' onClick={() => handleclick()}> No </button>

                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Confirmdeletion