import './App.css';


//importar nuestros componentes
import {Show, Create, Edit} from './components';

//importamos el router
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Show />} />
        <Route path='/create' element={ <Create />} />
        <Route path='/edit/:id' element={ <Edit />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
