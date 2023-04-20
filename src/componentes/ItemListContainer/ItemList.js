import Item from "./Item"


const ItemList = ({items}) => {
    return (
        <div className="container my-5">
            <h2 className="list-container__title">ItemListContainer</h2>
            <hr/>
            <div className='row'>
                { items.map((producto) => <Item key={producto.id} item={producto}/>)}
            </div>
           
        </div>
    )
}

export default ItemList