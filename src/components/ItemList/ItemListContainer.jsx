import React, { useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { dataBase } from '../../firebase/config'
import { useState } from 'react'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        const productosDb = collection(dataBase, "productos") 

        getDocs(productosDb)
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
