import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import {db} from '../../Services/firebase/index'

const ItemDetailContainer =({addItem}) => {
    const [product, setProduct]= useState([])
    const [loading, setLoading]= useState(true)
    const {prodId} = useParams()
    useEffect(() => {
        getDoc(doc(db,'products', prodId)).then(response => {
            const values = response.data()
            const product = {id : response.id, ...values}
            setProduct(product)
            console.log(product);
        }).catch(error => {
            console.error(error)
            }).finally (()=>{
                setLoading(false)
            })
        // getProduct(params.productId).then(response => {
        //     setProduct(response)
        // })
        // .catch(error => {
        //     console.log(error);
        // }).finally(() => {
        //     setLoading(false)
        // })
    }, [prodId])
    if (loading) {
        return <h1>Loading....</h1>
    }
    
    return (
        <section className='section-detail'>
            <h1>Detail</h1>
            <ItemDetail product={product} addItem={addItem}/>
        </section>
    )}

export default ItemDetailContainer

