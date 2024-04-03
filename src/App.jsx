import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ContactUs from './pages/ContactUs'
import Register from './pages/Register'
import Footer from './components/Footer'
import MeetFounder from './pages/MeetFounder'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/meet-founder' element={<MeetFounder/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App