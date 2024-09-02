import {Link } from 'react-router-dom';
import Card from '../Carcard/Card';

import './Featuredcars.css'

import { useState , useEffect} from 'react';

function FeaturedCars(){

    let [cars, setcars] = useState([]);

    useEffect(() => {
        try{
            fetch('http://localhost:3000/featuredcars' , {method : 'POST'})
            .then(res => res.json())
            .then(data => { console.log(data) ; setcars(data)})
            .catch(error => console.log(error));
        } catch (error){
            console.log(error);
        }
    },[])

    return(
    <>
        <div className='card-container'>
            <div className='cards'>
            { cars.map((car, index) => {
                return(
                 <div key={index} >
                    <Card car={car}></Card>
                 </div>
                );
             })}
            </div>

            <div>
                <Link to='/cars'> <button className='button view-button'> View More</button></Link>
            </div>

        </div>
    </>
    );

}

export default FeaturedCars;