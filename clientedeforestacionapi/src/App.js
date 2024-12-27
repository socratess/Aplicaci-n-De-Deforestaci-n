import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppNavbar from './layouts/AppNavbar';
import VistaAreasCriticasPages from './pages/VistaAreasCriticasPage';
import AreasCriticasPages from './pages/AreasCriticasPage';
import EvaluacionesPages from './pages/EvaluacionesPage';
import AreasCriticasDetallePages from './pages/AreasCriticasDetallePage';
import EvaluacionesDetallePages from './pages/EvaluacionesDetallePage';

function App() {
  return (
<Router> 
   <AppNavbar/>
  <Container>
   <Routes>
     <Route path='/' element={<VistaAreasCriticasPages/>}/>
     <Route path='/areas-criticas' element={<AreasCriticasPages/>}/>
     <Route path='/evaluaciones' element={<EvaluacionesPages/>}/>
     <Route path='/areas-criticas/:id' element={<AreasCriticasDetallePages/>}/>
     <Route path='/evaluaciones/:id' element={<EvaluacionesDetallePages/>}/>
    </Routes>
  </Container>
</Router>


  );
}

export default App;
