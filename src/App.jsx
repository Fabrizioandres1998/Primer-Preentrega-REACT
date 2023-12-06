import React from 'react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'




const App = () => {
  return (<>
    <Navbar />
    <div>
      <ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda!" />
    </div>
  </>
  )


}

export default App

