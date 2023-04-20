import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos( res.filter((prod) => prod.category === categoryId))
                    
                } else {
                    setProductos(res)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="container my-5">
            {loading
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer