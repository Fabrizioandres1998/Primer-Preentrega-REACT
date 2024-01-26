import React, { useContext, useState, useEffect } from 'react' 
import CartContext from '../Context/CartContext'
import ItemCount from './ItemCount' 

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
        <div className="card card-detail">
            <div className="card-body">
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img className="card-img-top" src={item.imagen} alt="Card image cap" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.descripcion}</p>
                        <p className="card-text">${item.precio}</p>

                        <ItemCount onIncrement={handleIncrement} onDecrement={handleDecrement} count={contador} />

                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => agregarAlCarrito(item, contador)}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) 
} 

export default ItemDetail 
