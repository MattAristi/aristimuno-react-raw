import './ItemCount.css'
import {useState} from "react";

const ItemCount = ({stock,initial,onAdd}) => {
    const[count, setCount]= useState(0)
    const decrement = () => {
        if (count>initial)
        setCount(count - 1)
    }
 
    const increment = () => {
        if (count< stock)
        setCount(count +1)
    }
    
    return(
        <div>
            <div className='counter'>
                <button className="btn-count" onClick={decrement}>-</button>
                <p className='qantity'>{count}</p>
                <button className="btn-count" onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd (count, stock)} className="btn-count">Add to cart</button>
        </div>
    )
}

export default ItemCount;