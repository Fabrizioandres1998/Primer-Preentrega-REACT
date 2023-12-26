import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ producto}) => {

    const { id } = useParams()
    console.log(id)

    return (

        <div className="card">
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">{producto.precio}</p>
                <ItemCount />
                <button type="button" className="btn btn-warning"> Comprar</button>
            </div>
        </div>

    )
}

export default ItemDetail