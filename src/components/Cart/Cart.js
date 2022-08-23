import CartItem from '../CartItem/CartItem'

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