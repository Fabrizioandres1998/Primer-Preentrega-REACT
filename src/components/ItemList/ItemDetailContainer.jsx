import React, { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom' 
import ItemDetail from './ItemDetail' 
import { doc, getDoc } from 'firebase/firestore' 
import { dataBase } from '../../firebase/config' 

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null) 
    const { id } = useParams()  // Asegúrate de que el nombre del parámetro sea 'id'

    useEffect(() => {

        const fetchData = async () => {
            try {
                const docRef = doc(dataBase, 'productos', id) 
                const docSnap = await getDoc(docRef) 

                if (docSnap.exists()) {
                    setItem({
                        ...docSnap.data(),
                        id: docSnap.id,
                    }) 
                } else {
                    console.error('No se encontró el documento con el ID proporcionado.') 
                }
            } catch (error) {
                console.error('Error al obtener datos del servidor:', error) 
            }
        } 

        fetchData() 
    }, [id]) 

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    ) 
} 

export default ItemDetailContainer 
