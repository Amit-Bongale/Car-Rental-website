import '../css/Cardetails.css'
import ImageSlider from "./Cardcaurosal";

import carslist from '../../Assets/json/cars';

import { useParams } from 'react-router-dom';

function Cardetails(){
    let {carname} = useParams();

    function filterdata(data,condition) {return data.filter(item => condition(item));}

    const result = filterdata(carslist.cars, item => item.model = {carname})

    return(
        <div className="cardetails-container">

            <ImageSlider></ImageSlider>
                
                <div>
         
                    <h2>{result[1].driver_name}</h2>
                    <h2>{result[1].driver_rating}</h2>
                    <h2>{result.car_rating}</h2>
                    <h2>{result[1].driver_contact}</h2>
                    <h2>{result[0].driver_contact}</h2>
                    <h2>{result[0].driver_contact}</h2>
                    <h2>{result[0].driver_contact}</h2>
                </div>
        

        </div>
    );
}

export default Cardetails;