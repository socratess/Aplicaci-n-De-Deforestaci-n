import {Button,Table} from 'react-bootstrap';

function AreasCriticasTable({areasCriticas, verDetalle,handleShow,handleDelete}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Latitud</th>
          <th>Longitud</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {areasCriticas.map(area=> (
            <tr key={area.id} onClick={() => verDetalle(area.id)}>
                <td>{area.id}</td>
                <td>{area.nombre}</td>
                <td>{area.descripcion}</td>
                <td>{area.latitud}</td>
                <td>{area.longitud}</td>
                <td>
                    <Button variant='warning' onClick={e => {e.stopPropagation(); handleShow(area)}}>
                        Editar
                    </Button>
                    {" "}
                    <Button variant='danger' onClick={e => {e.stopPropagation(); handleDelete(area.id)}}>
                        Eliminar
                    </Button>
                </td>

            </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AreasCriticasTable;