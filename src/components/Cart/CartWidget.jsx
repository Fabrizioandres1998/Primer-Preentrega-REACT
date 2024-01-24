import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'

const CartWidget = () => {

    const {numeroDelCarrito} = useContext(CartContext)

    return (
        <>
            <span className="cartWidget-number">{numeroDelCarrito()}</span>
            <Link to={'/Carrito'}><i className="bi bi-cart3"></i></Link>
        </>
    )
}

export default CartWidget
