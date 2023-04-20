import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

    const [item, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {itemId} = useParams()

   useEffect(() => {
        setLoading(true)

         pedirDatos()   
            .then((res) =>{
              if (itemId) {  setItems( res.find((prod) => prod.id === Number(itemId)))
            } else {
                setItems(res)
            }
            })
            .finally(() => {
                setLoading(false)
            })

   }, [itemId])
   
    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    :<ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer 