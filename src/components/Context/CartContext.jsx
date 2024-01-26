import { createContext, useEffect } from 'react' 
import { useState } from 'react' 

const CartContext = createContext() 

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [] 

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial) 

    const agregarAlCarrito = (producto, contador) => {
        const productoAgregado = { ...producto, contador }

        const nuevoCarrito = [...carrito]
        const indiceEnElCarrito = nuevoCarrito.findIndex((prod) => prod.id === productoAgregado.id)

        if (indiceEnElCarrito !== -1) {
            nuevoCarrito[indiceEnElCarrito].contador = productoAgregado.contador
        } else {
            nuevoCarrito.push(productoAgregado)
        }

        setCarrito(nuevoCarrito)

    }

    const numeroDelCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.contador, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.contador, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito)) 
    }, [carrito]) 

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, numeroDelCarrito, precioTotal, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    ) 
} 

export default CartContext 

