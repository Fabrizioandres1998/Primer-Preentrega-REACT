import { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)

    const contadorMin = () => {
        if (contador < 1) {
            setContador(0)
        }
    }

    return (
        <div className="btn_contador">
            <button type="button" className="btn btn-warning" onClick={() => { setContador(contador + 1) }}>+</button>
            {contador}
            <button type="button" className="btn btn-warning" onClick={() => { setContador(contador - 1); contadorMin()}}>-</button>
        </div>   
    )
}

export default ItemCount
