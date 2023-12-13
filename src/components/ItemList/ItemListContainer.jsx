import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {

    const productos = [
        { id: 10, nombre: "Producto 1", descripcion: "Descripcion de producto A", precio: 100 },
        { id: 20, nombre: "Producto 2", descripcion: "Descripcion de producto B", precio: 200 },
        { id: 30, nombre: "Producto 3", descripcion: "Descripcion de producto C", precio: 300 }
    ]

    return (
            <ItemList
                productos={productos}
            />        
    )
}

export default ItemListContainer
