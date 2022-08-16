import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail= ({product}) => {
    const [quantity, setQuantity]= useState(0)
    const addQuantity = (quantity,stock) =>{
        if (quantity<=stock)
        console.log('Total',quantity);
        setQuantity(quantity)
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
                    <h3>{product.stock} unidades en stock</h3>
                    { quantity > 0 ? <Link  to='/cart'><p className="detail-right">{`Agregaste ${quantity} unidades`}</p><button className="ir-al-carrito" >Ir al carrito</button></Link> : <ItemCount stock={product.stock} initial={0} onAdd={addQuantity} />}               
                </div>   
            </div>
    )
}
export default ItemDetail