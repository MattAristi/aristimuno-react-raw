 import './Item.css'

const Item = ({product}) =>{
    

    return <div className='item'>
                <h1>{product.category}</h1>
                <h2>{product.name}</h2>
                <img className="img-product" src={product.img} alt={product.name}></img>
                <h2>${product.price}</h2>                
            </div>
}

export default Item