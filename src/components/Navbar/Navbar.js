import './Navbar.css'
// import logoRaw from './imagenesraw/logoblack.jpg'

const Navbar = () => {
    return (
       <nav className='header'>
        <div>
            <img className='img' src='./imagenesraw/logoblack.jpg' alt={"logoRaw"}></img>
        </div>
        <div className='navbar'>
            <button className="btn-login">loguin</button>
            <button className="btn-logout">Logout</button>
            <button className="btn-cart">cart</button>
        </div>
       </nav> 
    )
}

export default Navbar;