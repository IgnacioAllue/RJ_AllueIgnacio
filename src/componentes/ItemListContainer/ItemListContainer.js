import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Link } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    
    const {categoryId} = useParams()


    useEffect(() => {
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
    }, [categoryId])

    return (
        <div className="container my-5">
            <h2 className="list-container__title">ItemListContainer</h2>
            <hr/>
            <div className='row'>
            {productos.map((prod) => (
            <div className='col-3 m-3'>
                <h2>{prod.name}</h2>
                <img src={prod.img}/>
                <p>Precio: ${prod.price}</p>
                <p>Categoria: {prod.category}</p>
                <Link to={`/detail/${prod.id}`} className='btn btn-primary'>Ver mas</Link>
            </div>))
            }
            </div>
           
        </div>
    )
}

export default ItemListContainer