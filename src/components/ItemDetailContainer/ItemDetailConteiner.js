import './ItemDetailContainer.css'
import { getProduct } from "../../AsyncMock"
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =() => {
    const [product, setProduct]= useState([])
    const [loading, setLoading]= useState(true)
    const params = useParams()
    useEffect(() => {
        getProduct(params.productId).then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })
    }, [params.productId])
    if (loading) {
        return <h1>Loading....</h1>
    }
    
    return (
        <section className='section-detail'>
            <h1>Detail</h1>
            <ItemDetail product={product}/>
        </section>
    )}

export default ItemDetailContainer

