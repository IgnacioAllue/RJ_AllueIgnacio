import './navbar.css'
import Logo from './hoguera.png'
import Carrito from '../Carrito/Carrito'


export const Navbar = () => {
    return (
        <header className="header">
          <div className="header_container">
            <img src= {Logo} className="header_logo" alt='logo'/>
            <nav className="navbar">
              <p className="navbar_link">EnlaceN1 </p>
              <p className="navbar_link">EnlaceN2 </p>
              <p className="navbar_link">EnlaceN3 </p>
            </nav>
            <Carrito/>
          </div>
        </header>       
    )
}

