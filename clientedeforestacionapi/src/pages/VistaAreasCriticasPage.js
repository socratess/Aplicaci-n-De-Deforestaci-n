import { useEffect, useState } from "react";
import vistaAreasCriticasService from "../services/vistaAreasCriticasService";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function VistaAreasCriticasPages(){

    const [vistaAreasCriticas, setVistaAreasCriticas] = useState([])


const cargarVistaAreasCriticas = async() => {
    
    try {
       const response = await vistaAreasCriticasService.obtenerVistasAreasCriticas() 
   setVistaAreasCriticas(response.data)
       
    } catch (error) {
        console.log("Error al obtener la vista de areas criticas",error);
    }
}


useEffect(()=>{
    cargarVistaAreasCriticas()
},[]) 

    return (
    <Container className="mt-3">
        <h1>Vista de areas criticas</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Número de evaluaciones</th>
        </tr>
      </thead>
      <tbody>
      {vistaAreasCriticas.map(vista=>(
        <tr key={vista.id}>
        <td>{vista.id}</td>
        <td>{vista.nombre}</td>
        <td>{vista.descripcion}</td>
        <td>{vista.numeroEvaluaciones}</td>
        </tr>))}
      </tbody>
    </Table>
    </Container>
    )
}

export default VistaAreasCriticasPages;