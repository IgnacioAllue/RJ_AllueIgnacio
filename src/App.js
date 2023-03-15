import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { Navbar } from './componentes/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Vamos aprendiendo"} />
    </div>
  );
}

export default App;
