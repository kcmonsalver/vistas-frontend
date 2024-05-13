
import './App.css';
import { CompAgregarClientes } from './Componentes/CompAgregarCliente';
import { CompClienteMostrar } from './Componentes/CompClienteMostrar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CompModificarClientes} from './Componentes/CompModificarClientes' 

import MenuC from './Componentes/menu';
import { CompServicioMostrar } from './Componentes/CompServicioMostrar';
import { CompAgregarServicios } from './Componentes/CompAgregarServicio';
import { CompModificarServicio } from './Componentes/CompModificarServicio';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
      <MenuC/>
      <BrowserRouter>
      <Routes>
        
        <Route path= '/clientes' element = {<CompClienteMostrar/>}/>
        <Route path= '/clientes/agregar' element = {<CompAgregarClientes/>}/>
        <Route path= '/clientes/actualizar/:id' element = {<CompModificarClientes/>}/>
        <Route path='/servicios' element = {<CompServicioMostrar/>}/>
        <Route path='/servicios/agregar' element = {<CompAgregarServicios/>}/>
        <Route path='/servicios/actualizar/:id' element = {<CompModificarServicio/>}/>

      </Routes>

      </BrowserRouter>
    <Footer/>
    
    
    </div>
  );
}

export default App;
