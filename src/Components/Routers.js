import {Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Cardetails from './Pages/Cardetails';

function CustomRouters(){
    return(

        <Routes>
            <Route path='/' element={<Home></Home>}> </Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/cardetails' element={<Cardetails></Cardetails>}></Route>
        </Routes>
    );
    
}

export default CustomRouters;

