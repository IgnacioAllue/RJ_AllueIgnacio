import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Nosotros from './componentes/Nosotros/Nosotros'
import Contactenos from './componentes/Contactenos/Contactenos'
import { Navbar } from './componentes/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />

          <Routes>
            <Route path='/' element={ <ItemListContainer /> }/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
            <Route path='/nosotros' element={ <Nosotros />}/>
            <Route path='/contactenos' element={ <Contactenos />}/>
            <Route path='*' element={ <Navigate to={"/"}/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
