import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ItemDetailContainer from './components/ItemList/ItemDetailContainer'
import { CartProvider } from './components/Context/CartContext'
import Carrito from './components/Cart/Carrito'
import CheckOut from './components/CheckOut'

const App = () => {
  return (
    
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/carrito' element={<Carrito />} />
          <Route exact path='/checkout' element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  ) 
}

export default App 

