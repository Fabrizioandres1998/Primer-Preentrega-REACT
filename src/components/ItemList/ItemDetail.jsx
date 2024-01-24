import React, { useContext, useState, useEffect } from 'react'
import CartContext from '../Cart/CartContext'

const ItemDetail = ({ item }) => {
    const { carrito, agregarAlCarrito } = useContext(CartContext)

    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log(carrito)
    }, [carrito])

    const handleIncrement = () => {
        setContador(contador + 1)
    }

    const handleDecrement = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }




    return (
        <div className="card">
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
                <p className="card-text">${item.precio}</p>

                <div className="btn_contador">
                    <button type="button" className="btn btn-warning" onClick={handleIncrement}>
                        +
                    </button>
                    {contador}
                    <button type="button" className="btn btn-warning" onClick={handleDecrement}>
                        -
                    </button>
                </div>

                <button type="button" className="btn btn-warning" onClick={() => agregarAlCarrito(item, contador)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemDetail
