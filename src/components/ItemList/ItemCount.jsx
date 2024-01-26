import React, { useState } from 'react'

const ItemCount = ({ onIncrement, onDecrement, count }) => {
    return (
        <div className="btn_contador">
            <button type="button" className="btn btn-warning" onClick={onIncrement}>
                +
            </button>
            {count}
            <button type="button" className="btn btn-warning" onClick={onDecrement}>
                -
            </button>
        </div>
    )
}

export default ItemCount
