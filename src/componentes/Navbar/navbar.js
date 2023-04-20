import './navbar.css'
import Logo from './hoguera.png'
import Carrito from '../CarritoIcono/CarritoIcono'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <header className="header">
          <div className="header_container">
            <img src= {Logo} className="header_logo" alt='logo'/>
            
            <nav className="navbar">
              <Link to='/' className="navbar__link">Inicio</Link>
              <Link to='/productos/carpa' className="navbar__link">Carpas</Link>
              <Link to='/productos/herramientas' className="navbar__link">Herramientas</Link>
              <Link to='/productos/accesorios' className="navbar__link">Accesorios</Link>
              <Link to='/contactenos' className="navbar__link">Contactenos</Link>
              <Link to='/nosotros' className="navbar__link">Nosotros</Link>
            </nav>

            <Carrito/>
          </div>
        </header>       
    )
}

