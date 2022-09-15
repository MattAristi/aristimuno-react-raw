import {CartItem} from '../compontentsExported'

const Cart = ({products}) => {
    return(
        <div className="cart-container">
            {products.map(product => (
                <CartItem product={product} key={product.id}/>
        ))}
        </div>
        )
}

export default Cart