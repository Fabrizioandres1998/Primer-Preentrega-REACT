import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const {id} = useParams()
    console.log(id)

    const productos = [
            { id: 10, nombre: "Bajo mesada", descripcion: "Descripcion de producto A", precio: 100, categoria: "Cocina" },
            { id: 20, nombre: "Barra desayunadora", descripcion: "Descripcion de producto B", precio: 200, categoria: "Cocina" },
            { id: 30, nombre: "Despensero", descripcion: "Descripcion de producto C", precio: 300, categoria: "Cocina" },
            { id: 40, nombre: "Mesa", descripcion: "Descripcion de producto D", precio: 400, categoria: "Comedor" },
            { id: 50, nombre: "Silla", descripcion: "Descripcion de producto E", precio: 500, categoria: "Comedor" },
            { id: 60, nombre: "Sillon", descripcion: "Descripcion de producto F", precio: 600, categoria: "Comedor" },
            { id: 70, nombre: "Cama", descripcion: "Descripcion de producto G", precio: 700, categoria: "Dormitorio" },
            { id: 80, nombre: "Ropero", descripcion: "Descripcion de producto H", precio: 800, categoria: "Dormitorio" },
            { id: 90, nombre: "Mesa de luz", descripcion: "Descripcion de producto I", precio: 900, categoria: "Dormitorio" }
    ]

    let productosFiltrados  

    if (id === undefined) {
        productosFiltrados = productos
    } else {
        productosFiltrados = productos.filter((producto) => producto.categoria === id)
    }

    return (
        <ItemList

            productos={productosFiltrados}
        />
    )
}

export default ItemListContainer
