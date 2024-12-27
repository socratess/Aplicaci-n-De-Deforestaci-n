import axios from "axios";

const API_URL= "http://localhost:8082/api/vista-areas-criticas"

const obtenerVistasAreasCriticas= ()=> axios.get(API_URL);

const vistaAreasCriticasService= {
    obtenerVistasAreasCriticas
}

export default vistaAreasCriticasService






