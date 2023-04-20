import { FaShoppingCart } from "react-icons/fa";
import './CarritoIcono.css'
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
    const {totalCantidad} =useContext(CartContext)

    return(
        <Link to= "/cart" className="carrito">
            <FaShoppingCart className="carrito-icono" />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default Carrito