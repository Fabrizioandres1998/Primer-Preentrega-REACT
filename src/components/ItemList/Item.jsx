import React from 'react'

const Item = ({ nombre, descripcion, precio }) => {

    return (
        <div className="card">
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">{precio}</p>
                <button>Detalles</button>
            </div>
        </div>
    )
}

export default Item
