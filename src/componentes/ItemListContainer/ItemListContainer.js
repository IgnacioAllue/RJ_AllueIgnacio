import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import MOCK_DATA from '../../data/MOCK_DATA.json'


const PedirDatos = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve(MOCK_DATA)
        }, 1000)    
    })
} 

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        PedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="container my-5">
            <h2 className="list-container__title">ItemListContainer</h2>
            <hr/>
            <div className='row'>
            {productos.map((prod) => (
            <div className='col-3 m-3'>
                <h2>{prod.name}</h2>
                <img src={prod.img}/>
                <p>{prod.description}</p>
                <p>Precio: ${prod.price}</p>
                <p>{prod.category}</p>
                <button>Ver más</button>
            </div>))
            }
            </div>
           
        </div>
    )
}

export default ItemListContainer