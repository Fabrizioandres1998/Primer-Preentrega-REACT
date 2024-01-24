import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    const categoriasUnicas = [...new Set(productos.map(producto => producto.categoria))]

    return (
        <div className="container">
            {categoriasUnicas.map(categoria => (
                <div key={`categoria-${categoria}`}>
                    <h1>{categoria}</h1>
                    <div className="row">
                        {productos
                            .filter(producto => producto.categoria === categoria)
                            .map(producto => (
                                <div key={producto.id} className="col-md-4 mb-4">
                                    <Item
                                        nombre={producto.nombre}
                                        descripcion={producto.descripcion}
                                        precio={producto.precio}
                                        id = {producto.id}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ItemList
