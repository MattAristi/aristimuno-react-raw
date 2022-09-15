import '../CartItem/CartItem.css';

import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import { useContext } from 'react'

const CartItem = ({product}) => {

    const { removeItem } = useContext(CartContext)

    const remove = (id) => {
        removeItem(id)
    }
    return (
        <div key={product.id} className="card-cart">
            <Link to={`/detail/${product.id}`} className="text-card">
                <h4 className="text-desc-cart">{product.category}</h4>
                <h4 className="text-desc-cart">{product.name}</h4>
                <h4 className="text-desc-cart">{product.color}</h4>
                <h4 className="text-desc-cart">$ {product.price} c/u </h4>
                <h4 className="text-desc-cart">{product.quantity} Unidades</h4>
                <h4 className="text-desc-cart">SubTotal: $ {product.price * product.quantity}</h4>
            </Link>
            <div>
                <button className="button_cart" onClick={() => remove(product.id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem