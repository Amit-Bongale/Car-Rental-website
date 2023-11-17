import { BrowserRouter } from 'react-router-dom';

import Nav from './Components/Nav';


import CustomRouters from './Components/Routers';
 
import './App.css';

// import Login from './Components/Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav></Nav>
        <CustomRouters></CustomRouters>
      </div>
    </BrowserRouter>
  );
}

export default App;
