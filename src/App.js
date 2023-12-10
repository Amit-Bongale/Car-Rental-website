import { BrowserRouter } from 'react-router-dom';

import CustomRouters from './Components/Routers';

import Nav from './Components/nav/Nav';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <CustomRouters></CustomRouters>

    </BrowserRouter>
  );
}

export default App;
