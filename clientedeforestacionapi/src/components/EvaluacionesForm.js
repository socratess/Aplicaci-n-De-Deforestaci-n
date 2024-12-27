import React from 'react';
import { Form, Button } from 'react-bootstrap';

function EvaluacionForm({ evaluacion, setEvaluacion, errors, handleSave, habilitarFecha, setHabilitarFecha, areasCriticas }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvaluacion(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre Ruta</Form.Label>
        <Form.Control
          type="text"
          name="nombreRuta"
          placeholder="Nombre de la ruta"
          value={evaluacion.nombreRuta}
          onChange={handleChange}
          isInvalid={!!errors.nombreRuta}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombreRuta}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Informe Viabilidad</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="informeViabilidad"
          placeholder="Informe de viabilidad"
          value={evaluacion.informeViabilidad}
          onChange={handleChange}
          isInvalid={!!errors.informeViabilidad}
        />
        <Form.Control.Feedback type="invalid">
          {errors.informeViabilidad}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Área Crítica</Form.Label>
        <Form.Control
          as="select"
          name="areaCriticaEntityId"
          value={evaluacion.areaCriticaEntityId}
          onChange={handleChange}
          isInvalid={!!errors.areaCriticaEntityId}
        >
          <option value="">Seleccione un área crítica</option>
          {areasCriticas.map(area => (
            <option key={area.id} value={area.id}>
              {area.id} - {area.nombre}
            </option>
          ))}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errors.areaCriticaEntityId}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check 
          type="checkbox" 
          label="Incluir Fecha de Evaluación" 
          checked={habilitarFecha} 
          onChange={() => setHabilitarFecha(!habilitarFecha)} 
        />
      </Form.Group>
      {habilitarFecha && (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Fecha Evaluación</Form.Label>
            <Form.Control
              type="date"
              name="fechaEvaluacion"
              value={evaluacion.fechaEvaluacion}
              onChange={handleChange}
              isInvalid={!!errors.fechaEvaluacion}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fechaEvaluacion}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hora Evaluación</Form.Label>
            <Form.Control
              type="time"
              name="horaEvaluacion"
              value={evaluacion.horaEvaluacion}
              onChange={handleChange}
              isInvalid={!!errors.fechaEvaluacion}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fechaEvaluacion}
            </Form.Control.Feedback>
          </Form.Group>
        </>
      )}
      <Button variant="primary" onClick={handleSave}>
        Guardar
      </Button>
    </Form>
  );
}

export default EvaluacionForm;
