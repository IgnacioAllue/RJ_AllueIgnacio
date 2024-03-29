import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () =>{

    const [item, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {itemId} = useParams()

   useEffect(() => {
        setLoading(true)

         const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((doc) => {
                setItems({
                    id: doc.id,
                    ...doc.data()
                })
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