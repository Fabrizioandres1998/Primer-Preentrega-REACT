import React, { useContext } from 'react'
import CartContext from './CartContext'
const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciarCarrito = () => {
        vaciarCarrito()
    }

    return (
        <div className="containerCarrito">
            <h1 className="carritoTitulo">Carrito</h1>

            {carrito.length === 0 ? (
                <h3>El carrito está vacío.</h3>
            ) : (
                <div>
                    {carrito.map((prod) => (
                        <div key={prod.id}>
                            <h2>{prod.nombre}</h2>
                            <p>Precio unitario: ${prod.precio}</p>
                            <p>Precio total: ${prod.precio * prod.contador}</p>
                            <p>Cantidad: {prod.contador}</p>
                        </div>
                    ))}

                    <h3>Precio total: ${precioTotal()}</h3>
                    <button type="button" className="btn btn-warning" onClick={handleVaciarCarrito}>Vaciar carrito</button>
                </div>
            )}
        </div>
    )
}

export default Carrito
