import './Navbar.css'
import CartWitget from '../CartWitget/CartWitget';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
       <nav className='header'>
        <div>
            <img className='img' src='./imagenesraw/logoblack.jpg' alt={"logoRaw"}></img>
        </div>
        <div className='navbar'>
            <Link to='/category/cuadro' className="btn-filter">Cuadros</Link>
            <Link to='/category/horquilla' className="btn-filter">Horquillas</Link>
            <Link to='/category/porta' className="btn-filter">Potrtas</Link>
        </div>
        <div>
            <button className="btn-cart"><CartWitget/>10</button>
        </div>
       </nav> 
    );
}

export default Navbar;