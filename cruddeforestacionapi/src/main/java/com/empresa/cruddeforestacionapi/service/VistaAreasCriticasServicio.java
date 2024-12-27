package com.empresa.cruddeforestacionapi.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empresa.cruddeforestacionapi.dto.VistaAreaCriticaDTO;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

@Service
public class VistaAreasCriticasServicio {

    @Autowired
    private EntityManager entityManager;

    public List<VistaAreaCriticaDTO> obtenerVistasCriticas() { 
        Query query = entityManager.createNativeQuery("SELECT * FROM vista_areas_criticas_con_evaluaciones");
        @SuppressWarnings("unchecked")
        List<Object []> resultados = query.getResultList();
        return resultados.stream().map(this::convertirDTO).collect(Collectors.toList());
    }
    private VistaAreaCriticaDTO convertirDTO(Object[] objects){
    VistaAreaCriticaDTO vistaAreaCriticaDTO = new VistaAreaCriticaDTO();
    vistaAreaCriticaDTO.setId(((Number) objects[0]).longValue());
    vistaAreaCriticaDTO.setNombre((String) objects[1]);
    vistaAreaCriticaDTO.setDescripcion((String) objects[2]);
    vistaAreaCriticaDTO.setNumeroEvaluaciones(((Number) objects[3]).longValue());
    return  vistaAreaCriticaDTO;
}


}
