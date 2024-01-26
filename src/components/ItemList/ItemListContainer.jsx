import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { dataBase } from '../../helpers/config'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria

    useEffect(() => {
        const productosDb = collection(dataBase, "productos") 
        const llamarQuery = categoria ? query(productosDb, where("categoria", "==", categoria)) : productosDb

        getDocs(llamarQuery)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id } 
                    })
                ) 
            }) 
    }, [categoria])

    return (
        <>
            <ItemList productos={productos} />
        </>

    )
}

export default ItemListContainer
