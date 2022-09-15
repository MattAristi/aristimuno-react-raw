import './ItemList.css'

import {Item} from '../compontentsExported'

const ItemList =({products})=> {
    return <div className='card-list'>
                {products.map (product => (
                <Item key={product.id} product={product}/>
                ))}
            </div>
}
export default ItemList
