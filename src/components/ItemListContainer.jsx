import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <div className="item-list-container">
            <h2 className="greeting">{greeting}</h2>
        </div>
        </div>
    )
}

export default ItemListContainer
