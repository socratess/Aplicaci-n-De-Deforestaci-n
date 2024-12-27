import React from 'react';
import { Table, Button } from 'react-bootstrap';

function EvaluacionesTable({ evaluaciones, areasCriticas, verDetalle, handleShow, handleDelete }) {
    return (
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Ruta</th>
            <th>Informe Viabilidad</th>
            <th>Área Crítica</th>
            <th>Fecha Evaluación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {evaluaciones.map((evaluacion) => (
            <tr key={evaluacion.id} onClick={() => verDetalle(evaluacion.id)}>
              <td>{evaluacion.id}</td>
              <td>{evaluacion.nombreRuta}</td>
              <td>{evaluacion.informeViabilidad}</td>
              <td>
                {areasCriticas.find(area => area.id === evaluacion.areaCriticaEntityId)?.nombre || evaluacion.areaCriticaEntityId}
              </td>
              <td>{new Date(evaluacion.fechaEvaluacion).toLocaleString()}</td>
              <td>
                <Button 
                  variant="warning" 
                  onClick={(e) => { e.stopPropagation(); handleShow(evaluacion); }}
                >
                  Editar
                </Button>
                {' '}
                <Button 
                  variant="danger" 
                  onClick={(e) => { e.stopPropagation(); handleDelete(evaluacion.id); }}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  
  export default EvaluacionesTable;