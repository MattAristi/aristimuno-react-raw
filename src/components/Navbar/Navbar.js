import './Navbar.css'
import CartWitget from '../CartWitget/CartWitget';
const Navbar = () => {
    return (
       <nav className='header'>
        <div>
            <img className='img' src='./imagenesraw/logoblack.jpg' alt={"logoRaw"}></img>
        </div>
        <div className='navbar'>
            <button className="btn-login">loguin</button>
            <button className="btn-logout">Logout</button>
            <button className="btn-cart"><CartWitget/>10</button>
            
        </div>
       </nav> 
    );
}

export default Navbar;