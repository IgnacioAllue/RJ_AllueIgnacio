import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import {BsFillTrash3Fill} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    return(
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.img}/>
                        <div>
                            <small>Cantidad: {item.cantidad} Precio: {item.price}</small>
                        </div>
                        <p>Precio total: {item.price * item.cantidad}</p>
                        <button onClick={() => removerItem((item.id))} className="btn btn-danger"><BsFillTrash3Fill/></button>
                        <hr/>
                    </div>
                ))
            }
            <h3>TOTAL: {totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-success m-2">Terminar mi compra</Link>
        </div>
    )
}

export default Cart