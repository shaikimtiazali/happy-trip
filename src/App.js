import './App.css';import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import search from './features/search/search.jsx'
import Homepage from './modules/bookingflights/header/Homepage';
import Thankpage from './modules/bookingflights/header/Thankpage';
function App() {
  return (
    // <div className="App">
    //   <>
    //     {/* <nav>Booking Flight Ticket</nav> */}
    //     <search />
    //     {/* <Homepage /> */}

    //   </>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/ThankU" element={<Thankpage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

 
