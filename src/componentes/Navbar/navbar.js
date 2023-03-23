import './navbar.css'
import Logo from './hoguera.png'
import Carrito from '../Carrito/Carrito'


export const Navbar = () => {
    return (
        <header className="header">
          <div className="header_container">
            <img src= {Logo} className="header_logo" alt='logo'/>
            <nav className="navbar">
              <a href='/' className="navbar_link">Productos </a>
              <a href='/nosotros' className="navbar_link">Nosotros </a>
              <a href='/contactenos' className="navbar_link">Contactenos </a>
            </nav>
            <Carrito/>
          </div>
        </header>       
    )
}

