import {Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './login/Login';
import Cardetails from './Cardetails/CarDetails';
import Allcars from './Cars/Allcars';
import Signup from './signup/Signup';
import Contactus from './Contactus/Contactus';
import Booking from './booking/Booking';

// Admin routes

import Auth from './Admin/Auth/Auth';

import Adminlogin from './Admin/Adminlogin/Adminlogin';
import AdminCardetails from './Admin/AdminCardetails/AdminCardetails';
import Insertcars from './Admin/Insercars/Insertcars';
import BookedCardetails from './Admin/BookedCarsDetails/BookedCardetails';
import Updatecars from './Admin/AdminCardetails/UpdateCars/Updatecars';
import Carimages from './Admin/Carsimages/Carimages';
import Insertcarimage from './Admin/InsertCarImage/Insertcarimage';

import Home2 from './Home2/Home2';

// Users
import Userdetails from './Users/details/Userdetails';
import Userbookings from './Users/Bookings/Userbookings';
import Userwishlist from './Users/wishlist/Userwishlist';

function CustomRouters(){
    return(

        <Routes>

            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/cardetails/:carid?' element={<Cardetails></Cardetails>}></Route>
            <Route path='/cars' element={<Allcars></Allcars>}></Route>
            <Route path='/booking/:carname?' element={<Booking></Booking>}></Route>
            <Route path='/contactus' element={<Contactus></Contactus>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            
            
            {/* Admin routes */}
            <Route path='/adminlogin' element={<Adminlogin></Adminlogin>}></Route>
            <Route path='/admin' element={<Auth></Auth>}>
                <Route path='dashboard' element={<AdminCardetails></AdminCardetails>}></Route>
                <Route path='insertcars' element={<Insertcars></Insertcars>}></Route>
                <Route path='Bookedcars' element={<BookedCardetails></BookedCardetails>}></Route>
                <Route path='UpdateDetails/:model?' element={<Updatecars/>}></Route>
                <Route path='carsimages' element={<Carimages></Carimages>}></Route>
                <Route path='insertcarimages' element={<Insertcarimage></Insertcarimage>}></Route>
            </Route>
            
            <Route path='/home2' element={<Home2></Home2>}></Route>

            {/* User Routes */}
            <Route path='/userdetails' element={<Userdetails/>}></Route>
            <Route path='/userbookings' element={<Userbookings/>}></Route>
            <Route path='/userwishlist' element={<Userwishlist/>}></Route>
            
        </Routes>
        
    );
    
}

export default CustomRouters;

