import ItemCount from '../ItemCount/ItemCount'

const ItemDetail= ({product}) => {
    const addQuantity = (quantity,stock) =>{
        if (quantity<=stock)
        console.log('Total',quantity);
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
                    <ItemCount stock={product.stock} initial={0} onAdd={addQuantity} />                
                </div>   
            </div>
    )
}
export default ItemDetail