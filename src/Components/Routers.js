import {Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Cardetails from './Pages/details/CarDetails';
import Cars from './Pages/Cars/Cars';


function CustomRouters(){
    return(

        <Routes>

            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/cardetails/:carname?' element={<Cardetails></Cardetails>}></Route>
            {/* <Route path='/details' element={<Details></Details>}></Route> */}
            <Route path='/cars' element={<Cars></Cars>}></Route>
            
        </Routes>
    );
    
}

export default CustomRouters;

