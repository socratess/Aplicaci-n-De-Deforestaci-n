import axios from "axios";

const API_Url= "http://localhost:8082/api/areas-criticas";

const obtenerTodas= () => axios.get(API_Url);
const obtenerPorId= (id) => axios.get(`${API_Url}/${id}`);
const crear= (data) => axios.post(API_Url,data);
const actualizar= (id,data) => axios.put(`${API_Url}/${id}`,data);
const eliminar= (id) => axios.delete(`${API_Url}/${id}`);


const areasCriticasService = {
    obtenerTodas,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
    
}

export default areasCriticasService;


