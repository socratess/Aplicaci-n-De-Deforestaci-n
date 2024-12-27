import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Container, Button } from 'react-bootstrap';
import evaluacionesService from '../services/evaluacionesService';


function EvaluacionesDetallePages(){
    const { id } = useParams(); // Obtener el ID de los parámetros de la URL
    const [evaluacion, setEvaluacion] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const cargarEvaluacion = async () => {
          try {
            const response = await evaluacionesService.obtenerPorId(id); 
            setEvaluacion(response.data);
          } catch (error) {
            console.error('Error al obtener la evaluación:', error);
          }
        };
        cargarEvaluacion();
      }, [id]);


    return (
        <Container className="mt-4">
        <Button className="mb-3" variant="secondary" onClick={() => navigate('/evaluaciones')}>
          Atrás
        </Button>
        {evaluacion ? (
          <Card>
            <Card.Header>Detalles de la Evaluación Ferroviaria</Card.Header>
            <Card.Body>
              <Card.Title>{evaluacion.nombreRuta}</Card.Title>
              <Card.Text>
                <strong>Informe de Viabilidad:</strong> {evaluacion.informeViabilidad}<br />
                <strong>Fecha de Evaluación:</strong> {new Date(evaluacion.fechaEvaluacion).toLocaleDateString()}<br />
                <strong>Área Crítica ID:</strong> {evaluacion.areaCriticaEntityId}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <p>Cargando...</p>
        )}
      </Container>
    );
}
export default EvaluacionesDetallePages;