import { BrowserRouter } from 'react-router-dom';

import Nav from './Components/Nav';
import Herosection from './Components/Herosection';
import FeaturedCars from './Components/Pages/FeaturedCars';
import Features from './Components/Pages/Features'; 

import './App.css';

// import Login from './Components/Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav></Nav>
          <Herosection></Herosection>
          <FeaturedCars></FeaturedCars>
          <Features></Features>


          {/* <Login></Login> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
