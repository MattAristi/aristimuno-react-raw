import './ItemDetailContainer.css'

import ItemDetail from '../ItemDetail/ItemDetail'
import { fetcher } from '../utils/Fetcher'
import {getDetail} from '../../Services/firebase/firestore'
import {useAsync} from '../../hooks/useAsync'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =({addItem}) => {
    const {prodId} = useParams()

    const {loading, data ,error} = useAsync (() => fetcher(getDetail, prodId), [prodId])

    if (loading) {
        return <h1>Loading....</h1>
    }
    if (error) {
        return <h1>Hubo un error</h1>
    }
    
    return (
        <section className='section-detail'>
            <h1>Detail</h1>
            <ItemDetail product={data} addItem={addItem}/>
        </section>
    )}

export default ItemDetailContainer

