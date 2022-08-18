import './Navbar.css'
import CartWitget from '../CartWitget/CartWitget';
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
const Navbar = () => {
    const {getQuantityWidget}= useContext(CartContext)
    const qWitget = getQuantityWidget()
    return (
        <nav className='header'>
            <div>
                <img className='img' src='/imagenesraw/logoblack.jpg' alt={"logoRaw"}></img>
            </div>
            <div className='navbar'>
                <button className="btn-filter"><Link to='/' className="btn-filter">Home</Link></button>
                <button className="btn-filter"><Link to='/category/Cuadros' className="btn-filter">Cuadros</Link></button>
                <button className="btn-filter"><Link to='/category/Horquillas' className="btn-filter">Horquillas</Link></button>
                <button className="btn-filter"><Link to='/category/Portas' className="btn-filter">Potrtas</Link></button>
            </div>
            <div>
                <button className="btn-cart"><CartWitget/>{qWitget}</button>
            </div>
        </nav> 
    );
}

export default Navbar;