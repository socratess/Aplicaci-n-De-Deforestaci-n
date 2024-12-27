import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap"
import areasCriticasService from '../services/areasCriticasService';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AreasCriticasDetallePages(){


const {id}= useParams()
const navigate = useNavigate()
const [areasCriticasDetalle, setAreasCriticasDetalle]= useState(null)

useEffect(()=>{
    const cargarAreasCriticasDetalle= async () => {
    
        try {
            const response= await areasCriticasService.obtenerPorId(id)
            setAreasCriticasDetalle(response.data)                
        } catch (error) {
            console.error("Error al obtener las areas criticas detalle", error)
        }
    }

    cargarAreasCriticasDetalle()

}, [id])


    return (
        <Container className="mt-4">
        <h1>Detalle de area critica</h1>
        <Button className="mb-4" variant="secondary" onClick={()=> navigate("/areas-criticas")}>Atras</Button>
        {areasCriticasDetalle ? (
            <Card>
            <Card.Header>ID: {areasCriticasDetalle.id}</Card.Header>
            <Card.Body>
                <Card.Title>{areasCriticasDetalle.nombre}</Card.Title>
                <Card.Text>
                    <strong>Descripción:</strong> {areasCriticasDetalle.descripcion} <br/>
                    <strong>Latitud:</strong> {areasCriticasDetalle.latitud} <br/>
                    <strong>Longitud:</strong> {areasCriticasDetalle.longitud} <br/>
                    <strong>Indice de Deforestación:</strong> {areasCriticasDetalle.indiceDeforestacion}
                </Card.Text>         
            </Card.Body>
            </Card>
        ) : (<p>Cargando...</p>)
        }           
    </Container>
    )
}
export default AreasCriticasDetallePages;