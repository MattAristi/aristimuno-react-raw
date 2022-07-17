import './Navbar.css'
import logoRaw from 'https://drive.google.com/file/d/1n4YztrfMzuBrWouhbn_pVL9aZBfmd3-t/view?usp=sharing'

const Navbar = () => {
    return (
       <nav>
        <div>
            <img src={logoRaw}></img>
        </div>
        <div>
            <button>loguin</button>
            <button>Logout</button>
            <button>cart</button>
        </div>
       </nav> 
    )
}

export default Navbar;