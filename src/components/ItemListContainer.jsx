import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <div className="item-list-container">
            <h1 className="greeting">{greeting}</h1>
        </div>
        </div>
    )
}

export default ItemListContainer
