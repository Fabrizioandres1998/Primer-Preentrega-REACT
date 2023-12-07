import React from 'react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'




const App = () => {
  return (<>
    <Navbar />
    <ItemListContainer greeting={"¡Hola, bienvenido a Panin Plac!"}/>
  </>
  )


}

export default App

