import {Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Cardetails from './Pages/details/CarDetails';
import Cars from './Pages/Cars/Cars';
import ViewCardetails from './Pages/viewpage/viewpage';
import Contact from './Pages/Contact';

import Booking from './Pages/booking/Booking';


function CustomRouters(){
    return(

        <Routes>

            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/cardetails/:carname?' element={<Cardetails></Cardetails>}></Route>
            <Route path='/cars/cardetails/:carname?' element={<ViewCardetails></ViewCardetails>}></Route>
            {/* <Route path='/details' element={<Details></Details>}></Route> */}
            <Route path='/cars' element={<Cars></Cars>}></Route>
            <Route path='/booking' element={<Booking></Booking>}></Route>
            <Route path='/contactus' element={<Contact></Contact>}></Route>
            
        </Routes>
    );
    
}

export default CustomRouters;

