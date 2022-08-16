 import './Item.css'
 import {Link} from 'react-router-dom'

const Item = ({product}) =>{
    

    return <Link to={`/detail/${product.id}`} className='item'>
                <h2>{product.name}</h2>
                <img className="img-product" src={product.img} alt={product.name}></img>
                <h2>${product.price}</h2>                
            </Link>
}

export default Item