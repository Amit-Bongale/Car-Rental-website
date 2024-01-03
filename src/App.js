import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

import CustomRouters from './Components/Routers';
import Nav from './Components/nav/Nav';

// animate on scroll
import AOS from 'aos';
import 'aos/dist/aos.css'

import './App.css';

function App() {

  // aos initialization
  useEffect(() => {
    AOS.init(
      {
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        // delay: 100,
      }
    )
    AOS.refresh();
  },[])


  return (
    <BrowserRouter>

      <CustomRouters></CustomRouters>

    </BrowserRouter>
  );
}

export default App;
