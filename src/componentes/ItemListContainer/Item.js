import { Link } from 'react-router-dom'

const Item = ({item}) => {

    return (
        <div className='col-3 m-3'>
            <h2>{item.name}</h2>
            <img src={item.img}/>
            <p>Precio: ${item.price}</p>
            <p>Categoria: {item.category}</p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver mas</Link>
        </div>
    )
}

export default Item