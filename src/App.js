import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import { Home } from './Home';
import { CreateOffer } from './CreateOffer';
import { Offers } from './Offers';
import Login from './Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken}/>
  // }

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/create-offer' element={<CreateOffer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
