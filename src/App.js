import { BrowserRouter } from 'react-router-dom';

import Nav from './Components/Nav';


import CustomRouters from './Components/Routers';
 
import './App.css';
// import Cursor from './Components/Pages/CustomCursor/cursor';

// import Login from './Components/Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav></Nav>
        {/* <Cursor></Cursor> */}

        <CustomRouters></CustomRouters>
      </div>
    </BrowserRouter>
  );
}

export default App;
