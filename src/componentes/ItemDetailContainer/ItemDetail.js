import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    isInCart(item.id)
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () =>{
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div className="container my-5">

            <h2>{item.name}</h2>
            <hr/>
            <img src={item.img}/>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <p>Categoria: {item.category}</p>

            {
                isInCart(item.id)
                ?  <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                :  <ItemCount
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                />
            }

        </div>
    )
}

export default ItemDetail