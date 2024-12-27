import React, { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import evaluacionesService from '../services/evaluacionesService';
import areasCriticasService from '../services/areasCriticasService';
import EvaluacionesForm from '../components/EvaluacionesForm';
import EvaluacionesTable from '../components/EvaluacionesTable';
import ConfirmacionModal from '../components/ConfirmacionModal';


function EvaluacionesPages(){

    const [evaluaciones, setEvaluaciones] = useState([]);
    const [areasCriticas, setAreasCriticas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [evaluacionIdEliminar, setEvaluacionIdEliminar] = useState(null);
    const [tempEvaluacion, setTempEvaluacion] = useState({ 
        nombreRuta: '', 
        informeViabilidad: '', 
        areaCriticaEntityId: '', 
        fechaEvaluacion: '', 
        horaEvaluacion: '' 
    });
    const [errors, setErrors] = useState({});
    const [habilitarFecha, setHabilitarFecha] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        cargarEvaluaciones();
        cargarAreasCriticas();
    }, []);

    const cargarEvaluaciones = async () => {
        try {
            const response = await evaluacionesService.obtenerTodas();
            setEvaluaciones(response.data);
        } catch (error) {
            console.error('Error al obtener las evaluaciones:', error);
        }
    };

    const cargarAreasCriticas = async () => {
        try {
            const response = await areasCriticasService.obtenerTodas();
            setAreasCriticas(response.data);
        } catch (error) {
            console.error('Error al obtener las áreas críticas:', error);
        }
    };

    const verDetalle = (id) => {
        navigate(`/evaluaciones/${id}`);
    };

    const handleShow = (evaluacion = { nombreRuta: '', informeViabilidad: '', areaCriticaEntityId: '', fechaEvaluacion: '', horaEvaluacion: '' }) => {
        setErrors({});
        if (evaluacion.fechaEvaluacion) {
            const [fecha, horaCompleta] = evaluacion.fechaEvaluacion.split('T');
            const hora = horaCompleta.slice(0, 5); // Extrae la hora en formato HH:mm
            setTempEvaluacion({ ...evaluacion, fechaEvaluacion: fecha, horaEvaluacion: hora });
            } else {
            setTempEvaluacion(evaluacion);
            }
        
            setHabilitarFecha(!!evaluacion.fechaEvaluacion); // Habilitar checkbox si hay fecha
            setShowModal(true);
    };    

    const handleClose = () => {
        setShowModal(false);
        setTempEvaluacion({ nombreRuta: '', informeViabilidad: '', areaCriticaEntityId: '', fechaEvaluacion: '', horaEvaluacion: '' });
    };   

    const handleSave = async () => {
        if (!validarFormulario()) return;

        const fechaYHora = combinarFechaYHora(tempEvaluacion.fechaEvaluacion, tempEvaluacion.horaEvaluacion);

        const evaluacionConFechaYHora = {
            ...tempEvaluacion,
            fechaEvaluacion: habilitarFecha ? fechaYHora : ''
        };

        try {
            if (tempEvaluacion.id) {
                await evaluacionesService.actualizar(tempEvaluacion.id, evaluacionConFechaYHora);        
            } else {
  
            if (habilitarFecha) {
                await evaluacionesService.crear(evaluacionConFechaYHora);
            } else {
                await evaluacionesService.insertar(tempEvaluacion);
            }
            }
            setShowModal(false);
            cargarEvaluaciones();
        } catch (error) {
            console.error('Error al guardar la evaluación:', error);
        }
    };

    const handleDelete = (id) => {
        setEvaluacionIdEliminar(id);
        setShowConfirmModal(true);
    };

    const confirmarEliminacion = async () => {
        try {
          await evaluacionesService.eliminar(evaluacionIdEliminar);
          cargarEvaluaciones();
        } catch (error) {
          console.error('Error al eliminar la evaluación:', error);
        }
        setShowConfirmModal(false);
    };

    const validarFormulario = () => {
        const nuevosErrores = {};
    
        if (tempEvaluacion.nombreRuta.length < 2 || tempEvaluacion.nombreRuta.length > 255) {
          nuevosErrores.nombreRuta = 'El nombre de la ruta debe tener entre 2 y 255 caracteres.';
        }
    
        if (tempEvaluacion.informeViabilidad.length < 10 || tempEvaluacion.informeViabilidad.length > 500) {
          nuevosErrores.informeViabilidad = 'El informe de viabilidad debe tener entre 10 y 500 caracteres.';
        }
    
        if (!tempEvaluacion.areaCriticaEntityId) {
          nuevosErrores.areaCriticaEntityId = 'Debe seleccionar un área crítica.';
        }
    
        // Validar fecha y hora de evaluación (si está habilitada)
        if (habilitarFecha) {
          if (!tempEvaluacion.fechaEvaluacion || !tempEvaluacion.horaEvaluacion) {
            nuevosErrores.fechaEvaluacion = 'Debe seleccionar una fecha y hora de evaluación válida.';
          }
        }
    
        setErrors(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };
    
    const combinarFechaYHora = (fecha, hora) => {
        return `${fecha}T${hora}:00`;
    };


    return (
        <Container className="mt-4">
            <h1>Evaluaciones Ferroviarias</h1>
            <Button variant="primary" onClick={() => handleShow()}>
                Insertar Evaluación Ferroviaria
            </Button>
            
            <EvaluacionesTable 
                evaluaciones={evaluaciones} 
                areasCriticas={areasCriticas} 
                verDetalle={verDetalle} 
                handleShow={handleShow} 
                handleDelete={handleDelete} 
            />       

            <ConfirmacionModal 
                showConfirmModal={showConfirmModal} 
                handleClose={() => setShowConfirmModal(false)} 
                handleConfirm={confirmarEliminacion} 
                mensaje="¿Estás seguro de que deseas eliminar esta evaluación ferroviaria?" 
            />

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{tempEvaluacion.id ? 'Editar Evaluación Ferroviaria' : 'Crear Evaluación Ferroviaria'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <EvaluacionesForm 
                    evaluacion={tempEvaluacion} 
                    setEvaluacion={setTempEvaluacion} 
                    errors={errors} 
                    handleSave={handleSave} 
                    habilitarFecha={habilitarFecha} 
                    setHabilitarFecha={setHabilitarFecha}
                    areasCriticas={areasCriticas}
                />
                </Modal.Body>
            </Modal>
        </Container>

    );
}
export default EvaluacionesPages;