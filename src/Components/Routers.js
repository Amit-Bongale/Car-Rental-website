import {Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './login/Login';
import FeaturedCardetails from './Featuredcardetails/FeaturedCarDetails';
import Allcars from './Cars/Allcars';
import ViewCardetails from './viewpage/viewpage';
import Signup from './signup/Signup';
import Contactus from './Contactus/Contactus';
import Booking from './booking/Booking';

// Admin routes
import AdminCardetails from './Admin/AdminCardetails/AdminCardetails';
import Deletecars from './Admin/DeleteCars/Deletecars';
import Insertcars from './Admin/Insercars/Insertcars';
import Confirmdeletion from './Admin/Confirmdeletion/Confirmdeletion';

function CustomRouters(){
    return(

        <Routes>

            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/cardetails/:carname?' element={<FeaturedCardetails></FeaturedCardetails>}></Route>
            <Route path='/cars/cardetails/:carname?' element={<ViewCardetails></ViewCardetails>}></Route>
            <Route path='/cars' element={<Allcars></Allcars>}></Route>
            <Route path='/booking/:carname?' element={<Booking></Booking>}></Route>
            <Route path='/contactus' element={<Contactus></Contactus>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            
            <Route path='/admin' element={<AdminCardetails></AdminCardetails>}></Route>

            <Route path='/admin/insertcars' element={<Insertcars></Insertcars>}></Route>
            <Route path='/deletecars' element={<Deletecars></Deletecars>}></Route>
            <Route path='/confirmdelete/:model?' element={<Confirmdeletion></Confirmdeletion>}></Route>
            
        </Routes>
        
    );
    
}

export default CustomRouters;

