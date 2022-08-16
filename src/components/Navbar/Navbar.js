import './Navbar.css'
import CartWitget from '../CartWitget/CartWitget';
import { Link } from 'react-router-dom'
const Navbar = () => {
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
            <button className="btn-cart"><CartWitget/>10</button>
        </div>
       </nav> 
    );
}

export default Navbar;