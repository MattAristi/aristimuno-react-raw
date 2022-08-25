// import { getProducts, getProductsByCategory } from "../../AsyncMock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import {getDocs, collection, query, where} from 'firebase/firestore'
import{db} from '../../Services/firebase/index'

const ItemListContainer =({greeting}) => {
    const [products, setProducts]= useState([])
    const [loading, setLoading]= useState(true)
    const {catId} = useParams()
    
    
    useEffect(() => {
            setLoading(true)
            const collectionRef = !catId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', catId ))
                getDocs(collectionRef).then(response => {
                    console.log(response)
                    const products = response.docs.map(doc=> {
                        const value = doc.data()
                            console.log(value);
                        return{id : doc.id, ...value}   
                    })
                    setProducts(products);
                }).catch(error=> {
                    console.log(error)
                }).finally(()=> {
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

