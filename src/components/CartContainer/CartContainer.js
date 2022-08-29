import '../CartContainer/CartContainer.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Cart from '../Cart/Cart'
// import { addDoc, collection, Timestamp, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
// import { db } from '../../Services/firebase/index';
// import { async } from '@firebase/util';

const CartContainer = () => {
    const { cart, getQuantityWidget, getTotal, clearCart} = useContext(CartContext)

    const quantity = getQuantityWidget()
    const total = getTotal()
    

    if(quantity === 0) {
        return (
            <div className="no_item">
                <h1 className="titulo">No tienes productos seleccionados</h1>
                <button className="btn-link-shop"><Link className="link-shop" to="/">¡Nuestros Productos!</Link></button>
            </div>
        )
    }
    

    return (
        <div className='cart-container'>
            <h1 className="titulo">¡Este es tu carrito!</h1>
            <div>
                <Cart products={cart}/>
            </div>
            <h3 className="titulo">TOTAL: ${total}</h3>
            <div className='clear-order'>
                <button className="btn-order"><Link className="link-order" to="/orderdata">Generar Orden</Link></button>
                <button className="btn-clear-cart" onClick={() => clearCart()}>Vaciar Carrito</button>
            </div>
        </div>
    )
};
// onClick={() => createOrder()}

export default CartContainer;