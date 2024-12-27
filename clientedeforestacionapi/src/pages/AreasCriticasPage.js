import { Button, Container, Modal } from "react-bootstrap";
import vistaAreasCriticasService from "../services/vistaAreasCriticasService";
import { useEffect, useState } from "react";
import AreasCriticasTable from "../components/AreasCriticasTable";
import areasCriticasService from "../services/areasCriticasService";
import {useNavigate} from "react-router-dom";
import ConfirmacionModal from "../components/ConfirmacionModal";
import AreasCriticasForm from "../components/AreasCriticasForm";


function AreasCriticasPages(){

    const [areasCriticas, setAreasCriticas] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [showConfirmarModal, setShowConfirmarModal] = useState(false);
    const [areaIdEliminar, setAreaIdEliminar] = useState(null);
    const [selectArea, setSelectArea] = useState({nombre:"", descripcion:"", latitud:"", longitud:""});
    const [errors, setErrors] = useState({});
    const navigate= useNavigate()


const cargarAreasCriticas = async() => {
    
    try {
       const response = await areasCriticasService.obtenerTodas() 
   setAreasCriticas(response.data)
       
    } catch (error) {
        console.log("Error al obtener las areas criticas",error);
    }
}


useEffect(()=>{
    cargarAreasCriticas()
},[]) 

const verDetalle=(id)=>{
    navigate(`/areas-criticas/${id}`)
    };

const handleShow = (area ={nombre:"", descripcion:"", latitud:"", longitud:""}) => {
    setSelectArea(area)
    setErrors({})
    setShowModal(true)
};

const handleDelete = (id) => {
setAreaIdEliminar(id)
setShowConfirmarModal(true)
};

const handleClose = () => {

    setShowModal(false)

};

const confirmarEliminacion = async () => {
try {
    await areasCriticasService.eliminar(areaIdEliminar)
    cargarAreasCriticas()
} catch (error) {
    console.log("Error al eliminar el área critica", error)
}

setShowConfirmarModal(false)
    }


    const handleSave = async () => {

        if(!validarFormulario()){
return 
        }
        try {
            if(selectArea.id){
await areasCriticasService.actualizar(selectArea.id, selectArea)
            }
            else{
                await areasCriticasService.crear(selectArea)
            }
cargarAreasCriticas()

        } catch (error) {
            console.log("Error al guardar el área crítica",error)
        }
        setShowModal(false)
    };


    const validarFormulario = () => {
const nuevosErrores = {}

    if(selectArea.nombre.length < 2 || selectArea.nombre.length >100 ){
                nuevosErrores.nombre = "El nombre debe tener entre 2 y 100 caracteres"
    };

    if(selectArea.descripcion.length < 10 || selectArea.descripcion.length >500 ){
        nuevosErrores.nombre = "La descripción debe tener entre 10 y 500 caracteres"
};

if(selectArea.latitud === "" || isNaN(selectArea.latitud) ){
    nuevosErrores.nombre = "La latitud debe ser un numero valido"
};

if(selectArea.longitud === "" || isNaN(selectArea.longitud) ){
    nuevosErrores.nombre = "La longitud debe ser un numero valido"
};

setErrors(nuevosErrores)

return Object.keys(nuevosErrores).length === 0
    }

    return (
        <Container className="mt-3">
            <h1>Areas Criticas</h1>

<Button variant="primary"  onClick={() => handleShow()}>Crear area critica</Button>

{" "}
            <AreasCriticasTable 
            areasCriticas = {areasCriticas}
            verDetalle={verDetalle}
            handleShow={handleShow}
            handleDelete={handleDelete}
            />

<ConfirmacionModal 
showConfirmarModal={showConfirmarModal}
handleClose = {() => setShowConfirmarModal(false)}
handleConfirm = {confirmarEliminacion}
mensaje= "¿Está seguro que desea eliminar esta área crítica?"
/>



<Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectArea.id ? "Editar area critica": "Crear area critica"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <AreasCriticasForm 
            area ={selectArea}
            setArea = {setSelectArea}
            errors={errors}
            handleSave={handleSave}
            />
        </Modal.Body>
      </Modal>

            </Container>
    )
}
export default AreasCriticasPages;