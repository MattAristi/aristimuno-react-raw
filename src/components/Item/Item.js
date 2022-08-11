

const Item = ({product}) =>{
    

    return <div className='item'>
                <h1>{product.category}</h1>
                <h2>{product.name}</h2>
                <img className="img-product" src={product.img} alt={product.name}></img>
                <h3>{product.stock} unidades en stock</h3>               
            </div>
}

export default Item