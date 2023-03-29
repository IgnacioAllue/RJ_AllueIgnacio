import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";

const ItemDetailContainer = () =>{

    const [items, setItems] = useState([])
    
    const {itemId} = useParams()

   useEffect(() => {
         pedirDatos()   
            .then((res) =>{
              if (itemId) {  setItems( res.find((items) => items.id === Number(itemId)))
            } else {
                setItems(res)
            }
            
            })
   }, [itemId])
   
    return (
        <div className="container my-5">
            <h2>{items.name}</h2>
            <hr/>
            <div>
                <img src={items.img}/>
                <p>{items.description}</p>
                <p>Precio: ${items.price}</p>
                <p>Categoria: {items.category}</p>
            </div>
        </div>
    )
}

export default ItemDetailContainer 