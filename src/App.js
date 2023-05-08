import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './componentes/Nosotros/Nosotros'
import { Navbar } from './componentes/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from './componentes/CartContext/CartContext';
import Cart from './componentes/Carrito/Carrito';
import Checkout from './componentes/Checkout/Checkout';


function App() {

  return (
    <CartProvider>

      <BrowserRouter>
        <Navbar />

          <Routes>
            <Route path='/' element={ <ItemListContainer /> }/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
            <Route path='/detail/:itemId' element={ <ItemDetailContainer /> }></Route>
            <Route path='/cart' element={ <Cart/> }></Route>
            <Route path='/checkout' element= { <Checkout/> }></Route>
            <Route path='/nosotros' element={ <Nosotros />}/>
            <Route path='*' element={ <Navigate to={"/"}/>}/>
          </Routes>

      </BrowserRouter>
      
    </CartProvider>
  );
}

export default App;
