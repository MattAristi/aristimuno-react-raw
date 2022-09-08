import './ItemListContainer.css'

import ItemList from "../ItemList/ItemList"
import {getProducts} from '../../Services/firebase/firestore'
import {useAsync} from '../../hooks/useAsync'
import { useParams } from "react-router-dom"

const ItemListContainer =({greeting}) => {

    const {catId}= useParams()
    console.log(catId);

    const {loading, data ,error} = useAsync (() => getProducts(catId), [catId])
    
    if (loading) {
        return <h1 className="loading">Loading....</h1>
    }
    if (error) {
        return <h1>Hubo un error</h1>
    }
    // if (data.lenght === 0)
    
    return (
        <section className="item-list-container">
            <h1 className="titulo">{(catId) ? (catId):(greeting)}</h1>
            <ItemList products={data}/>
        </section>
    )}

export default ItemListContainer

