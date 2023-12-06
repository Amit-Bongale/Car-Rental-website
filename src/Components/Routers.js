import {Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './login/Login';
import Cardetails from './details/CarDetails';
import Allcars from './Cars/Allcars';
import ViewCardetails from './viewpage/viewpage';
import Signup from './signup/Signup';
import Contactus from './Contactus/Contactus';
import Booking from './booking/Booking';

function CustomRouters(){
    return(

        <Routes>

            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/cardetails/:carname?' element={<Cardetails></Cardetails>}></Route>
            <Route path='/cars/cardetails/:carname?' element={<ViewCardetails></ViewCardetails>}></Route>
            <Route path='/cars' element={<Allcars></Allcars>}></Route>
            <Route path='/booking' element={<Booking></Booking>}></Route>
            <Route path='/contactus' element={<Contactus></Contactus>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
           
        </Routes>
    );
    
}

export default CustomRouters;

