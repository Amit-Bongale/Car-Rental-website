import {Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './login/Login';
import Cardetails from './Cardetails/CarDetails';
import Allcars from './Cars/Allcars';
import Signup from './signup/Signup';
import Contactus from './Contactus/Contactus';
import Booking from './booking/Booking';

// Admin routes
import AdminCardetails from './Admin/AdminCardetails/AdminCardetails';
import Insertcars from './Admin/Insercars/Insertcars';
import Confirmdeletion from './Admin/Confirmdeletion/Confirmdeletion';
import BookedCardetails from './Admin/BookedCarsDetails/BookedCardetails';
import Updatecars from './Admin/UpdateCars/Updatecars';

function CustomRouters(){
    return(

        <Routes>

            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/cardetails/:carname?' element={<Cardetails></Cardetails>}></Route>
            <Route path='/cars' element={<Allcars></Allcars>}></Route>
            <Route path='/booking/:carname?' element={<Booking></Booking>}></Route>
            <Route path='/contactus' element={<Contactus></Contactus>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            
            <Route path='/admin' element={<AdminCardetails></AdminCardetails>}></Route>

            <Route path='/admin/insertcars' element={<Insertcars></Insertcars>}></Route>
            <Route path='/admin/Bookedcars' element={<BookedCardetails></BookedCardetails>}></Route>
            <Route path='/admin/UpdateDetails/:model?' element={<Updatecars/>}></Route>
            
        </Routes>
        
    );
    
}

export default CustomRouters;

