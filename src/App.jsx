import React from 'react'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'




const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/categoria/:id' element={<ItemListContainer />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>

    </BrowserRouter>
  )


}

export default App

