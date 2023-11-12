import { BrowserRouter } from 'react-router-dom';

import Nav from './Components/Nav';

import './App.css';

// import Login from './Components/Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav></Nav>
          {/* <Login></Login> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
