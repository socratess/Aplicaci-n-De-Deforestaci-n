package com.empresa.cruddeforestacionapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empresa.cruddeforestacionapi.dto.EvaluacionFerroviariaDTO;
import com.empresa.cruddeforestacionapi.service.EvaluacionFerroviariaServicio;

@RestController
@RequestMapping("/api/evaluaciones-ferroviarias")
public class EvaluacionFerroviariaControlador {
    

    @Autowired
    private EvaluacionFerroviariaServicio evaluacionFerroviariaServicio;

    @GetMapping    
public List<EvaluacionFerroviariaDTO> obtenerTodasEvaluacionFerroviarias(){
    return evaluacionFerroviariaServicio.obtenerTodasEvaluacionFerroviarias();
}


@GetMapping("/{id}")
public ResponseEntity<EvaluacionFerroviariaDTO> obtenerEvaluacionFerroviariaPorId(@PathVariable  Long id){
    EvaluacionFerroviariaDTO evaluacionFerroviariaDTO = evaluacionFerroviariaServicio.obtenerEvaluacionFerroviariaPorId(id);
        return  ResponseEntity.ok(evaluacionFerroviariaDTO);
}

@PostMapping
public EvaluacionFerroviariaDTO crearEvaluacionFerroviariaDTO(@RequestBody  EvaluacionFerroviariaDTO evaluacionFerroviariaDTO){
  return evaluacionFerroviariaServicio.crearEvaluacionFerroviariaDTO(evaluacionFerroviariaDTO);
}


@PutMapping("/{id}")
public ResponseEntity<EvaluacionFerroviariaDTO> actualizarEvaluacionFerroviariaPorId(@PathVariable  Long id, @RequestBody  EvaluacionFerroviariaDTO evaluacionFerroviariaDTO){
    EvaluacionFerroviariaDTO evaluacionFerroviariaDTOActualizada = evaluacionFerroviariaServicio.actualizarEvaluacionFerroviariaPorId(id,evaluacionFerroviariaDTO);
  return ResponseEntity.ok(evaluacionFerroviariaDTOActualizada);
}



@DeleteMapping("/{id}")
public  ResponseEntity<Void> eliminarEvaluacionFerroviariaPorId(@PathVariable Long id){
    evaluacionFerroviariaServicio.eliminarEvaluacionFerroviariaPorId(id);
return ResponseEntity.noContent().build();
}


@PostMapping("/insertar")
public ResponseEntity<Long> insertarEvaluacionFerroviariaDTO(@RequestBody  EvaluacionFerroviariaDTO evaluacionFerroviariaDTO){
  long nuevoId= evaluacionFerroviariaServicio.insertarEvaluacionFerroviariaDTO(evaluacionFerroviariaDTO);
return ResponseEntity.ok(nuevoId);
}


}
