import axios from "axios";

const API_Url = "http://localhost:8082/api/evaluaciones-ferroviarias";

const obtenerTodas= () => axios.get(API_Url);
const obtenerPorId= (id) => axios.get(`${API_Url}/${id}`);
const crear= (data) => axios.post(API_Url,data);
const actualizar= (id,data) => axios.put(`${API_Url}/${id}`,data);
const eliminar= (id) => axios.delete(`${API_Url}/${id}`);
const insertar = (data) => axios.post(`${API_Url}/insertar`,data);


const evaluacionesService = {
    obtenerTodas,
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
    insertar
    
}

export default evaluacionesService;


