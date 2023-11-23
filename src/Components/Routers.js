import {Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Cardetails from './Pages/details/CarDetails';
import Cars from './Pages/Cars/Cars';
import ViewCardetails from './Pages/viewpage/viewpage';
import Signup from './Pages/signup/Signup';
import Contactus from './Pages/Contactus/Contactus';
import Booking from './Pages/booking/Booking';


function CustomRouters(){
    return(

        <Routes>

            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/cardetails/:carname?' element={<Cardetails></Cardetails>}></Route>
            <Route path='/cars/cardetails/:carname?' element={<ViewCardetails></ViewCardetails>}></Route>
            <Route path='/cars' element={<Cars></Cars>}></Route>
            <Route path='/booking' element={<Booking></Booking>}></Route>
            <Route path='/contactus' element={<Contactus></Contactus>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
    );
    
}

export default CustomRouters;

