import './App.css'; import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import search from './features/search/search.jsx'
import Homepage from './modules/bookingflights/header/Homepage';
import Thankpage from './modules/bookingflights/header/Thankpage';
import Search from './components/search';
import Home from './features/main/home/home/Home';
import Payment from '../src/features/paymentscreen/Payment';
import { PayProvider } from '../src/context/PayContext';
import Nav from './features/paymentscreen/Nav';
import Home2 from './features/paymentscreen/Home2';

function App() {
  return (
    // <div className="App">
    //   <>
    //     {/* <nav>Booking Flight Ticket</nav> */}
    //     <search />
    //     {/* <Homepage /> */}

    //   </>
    // </div>
    // <BrowserRouter>

    <PayProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/thanku" element={<Thankpage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Payment" element={<Payment />} />
        
      </Routes>
      </Router>
      </PayProvider>
    // </BrowserRouter>
  )
}

export default App


