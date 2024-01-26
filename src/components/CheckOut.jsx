import { useContext } from 'react'
import CartContext from './Context/CartContext'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { dataBase } from '../helpers/config'


const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        const compra = collection(dataBase, "Compra de usuario")
        addDoc(compra, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }
    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }


    return (
        <>
            <h1>Completa tus datos para finalizar la compra</h1>
            <form onSubmit={handleSubmit(comprar)}>
                <input type='text' placeholder='Ingresa tu nombre' {...register("nombre")} />
                <input type='email' placeholder='Ingresa tu e-mail' {...register("email")} />
                <input type='phone' placeholder='Ingresa tu telefono' {...register("telefono")} />

                <button type="submit" className="btn btn-warning button-checkout">Finalizar compra</button>
            </form>
        </>
    )
}

export default CheckOut
