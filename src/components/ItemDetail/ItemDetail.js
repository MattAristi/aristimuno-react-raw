import './ItemDetail.css'

import {ItemCount, NotificationContext} from '../compontentsExported'
import { useContext, useState } from 'react';

import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

// import NotificationContext from '../../Notification/Notification';

const ItemDetail= ({product}) => {
    const {addItem, prevQuantity} = useContext(CartContext)
    const [quantity, setQuantity]= useState(0)
    const {setNotification}=  useContext(NotificationContext)
    const prevQ = prevQuantity(product.id)
    const addQuantity = (quantity,stock) =>{
        if (quantity<=stock){
            setNotification('succes', `Se agregaron ${quantity} ${product.category}${(quantity>1)? 's':''} ${product.name}`)
        setQuantity(quantity)
        const cartProduct={...product, quantity}
        {(quantity > 0) ? addItem(cartProduct): <ItemCount stock={product.stock} initial={prevQ} onAdd={addQuantity} />}
        }
        
        }

    
    
    return (        
            <div className="detail-card">
                <div className="detail-left">
                    <h1>{product.category}</h1>
                    <img className="img-product" src={product.img} alt={product.name}></img>
                </div> 
                <div className="detail-right">
                    <h2>{product.name}</h2>              
                    <h2>${product.price}</h2>
                    <h3>{`${product.stock} unidad${(product.stock!=1)? 'es':''} en stock`} </h3>
                    { quantity > 0 ? <Link className="detail-right" to='/cart'><p className="detail-right">{`Agregaste ${quantity} unidades`}</p><button className="ir-al-carrito" >Ir al carrito</button></Link> : <ItemCount stock={product.stock} initial={prevQ} onAdd={addQuantity} />}               
                </div>   
            </div>
    )
}
export default ItemDetail
