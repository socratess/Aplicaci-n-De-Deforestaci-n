package com.empresa.cruddeforestacionapi.dto;



public class VistaAreaCriticaDTO {
    

private Long id;
private String nombre;
private String descripcion; 
private Long numeroEvaluaciones;

public Long getId() {
    return id;
}
public void setId(Long id) {
    this.id = id;
}
public String getNombre() {
    return nombre;
}
public void setNombre(String nombre) {
    this.nombre = nombre;
}
public String getDescripcion() {
    return descripcion;
}
public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
}
public Long getNumeroEvaluaciones() {
    return numeroEvaluaciones;
}
public void setNumeroEvaluaciones(Long numeroEvaluaciones) {
    this.numeroEvaluaciones = numeroEvaluaciones;
}
}
