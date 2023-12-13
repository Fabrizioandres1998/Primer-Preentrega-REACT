import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <div className= "card_container">
            {productos.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        nombre={producto.nombre}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                    />
                )
            })}
        </div>
    )
}

export default ItemList
