import './Navbar.css'
import logoRaw from './imagenesraw/logoblack.jpg'

const Navbar = () => {
    return (
       <nav>
        <div>
            <img src={logoRaw} alt={"logoRaw"}></img>
        </div>
        <div>
            <button className="btn-loguin">loguin</button>
            <button className="btn-logout">Logout</button>
            <button className="btn-cart">cart</button>
        </div>
       </nav> 
    )
}

export default Navbar;