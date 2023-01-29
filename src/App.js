import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import { Home } from './Home';
import { CreateOffer } from './CreateOffer';
import { Offers } from './Offers';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
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
