import ItemCount from "../ItemCount/ItemCount"

const Item = ({product}) =>{
    const addQuantity = (quantity,stock) =>{
            if (quantity<=stock)
            console.log('Total',quantity);
            
        }

    return <div className='item'>
                <h1>{product.category}</h1>
                <h2>{product.name}</h2>
                <img className="img-product" src={product.img} alt={product.name}></img>
                <h2>${product.price}</h2>
                <h3>{product.stock} unidades en stock</h3>
                <ItemCount stock={product.stock} initial={0} onAdd={addQuantity} />
            </div>
}

export default Item