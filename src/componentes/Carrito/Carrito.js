import { FaShoppingCart } from "react-icons/fa";
import './Carrito.css'

const Carrito = () => {
    return(
        <div className="carrito">
            <FaShoppingCart className="carrito_icono" />
            <span>0</span>
        </div>
    )
}

export default Carrito