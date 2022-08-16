import { getProducts, getProductsByCategory } from "../../AsyncMock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer =({greeting}) => {
    const [products, setProducts]= useState([])
    const [loading, setLoading]= useState(true)
    const params = useParams()
    
    useEffect(() => {
        if (params.catId){
            setLoading(true)
            getProductsByCategory(params.catId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getProducts().then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false)
            })
        }
        
    },[params.catId])
    if (loading) {
        return <h1 className="loading">Loading....</h1>
    }
    
    return (
        <section className="item-list-container">
            <h1 className="titulo">{(params.catId) ? (params.catId):(greeting)}</h1>
            <ItemList products={products}/>
        </section>
    )}

export default ItemListContainer

