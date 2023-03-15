import './ItemListContainer.css'

const ItemListContainer = ( { greeting} ) => {
    return(
         <div className='container'>
              <h2 className='saludo'>Bienvenido</h2>
              <hr/>
             <p>{greeting}</p>
         </div>
    )
}

export default ItemListContainer