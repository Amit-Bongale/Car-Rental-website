import { BrowserRouter } from 'react-router-dom';

import Nav from './Components/Nav';
import Herosection from './Components/Herosection';
import Cards from './Components/Pages/Cards';


import './App.css';

// import Login from './Components/Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav></Nav>
          <Herosection></Herosection>
          <Cards></Cards>


          {/* <Login></Login> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
