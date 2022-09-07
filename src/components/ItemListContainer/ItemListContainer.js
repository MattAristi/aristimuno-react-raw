import './ItemListContainer.css'

import { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import {getProducts} from '../../Services/firebase/firestore'
import { useParams } from "react-router-dom"

const ItemListContainer =({greeting}) => {
    const [products, setProducts]= useState([])
    const [loading, setLoading]= useState(true)
    const {catId} = useParams()
    
    
    useEffect(() => {
            setLoading(true)

            getProducts(catId).then(products => {
                setProducts(products)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
            
    },[catId])
    if (loading) {
        return <h1 className="loading">Loading....</h1>
    }
    
    return (
        <section className="item-list-container">
            <h1 className="titulo">{(catId) ? (catId):(greeting)}</h1>
            <ItemList products={products}/>
        </section>
    )}

export default ItemListContainer

