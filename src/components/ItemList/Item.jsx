import React from 'react'

import { Link } from 'react-router-dom'


const Item = ({ nombre, id }) => {

    return (
        <div className="card">
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <Link to={`/producto/${id}`}><button type="button" className="btn btn-warning">Detalles</button></Link>
            </div>
        </div>
    )
}

export default Item
