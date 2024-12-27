package com.empresa.cruddeforestacionapi.dto;

public class AreaCriticaDTO {
    
    private Long id;
    private String nombre;
    private String descripcion;
    private Double latitud;
    private Double longitud;
    private String indiceDeforestacion;
 
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
    public Double getLatitud() {
        return latitud;
    }
    public void setLatitud(Double latitud) {
        this.latitud = latitud;
    }
    public Double getLongitud() {
        return longitud;
    }
    public void setLongitud(Double longitud) {
        this.longitud = longitud;
    }
    public String getIndiceDeforestacion() {
        return indiceDeforestacion;
    }
    public void setIndiceDeforestacion(String indiceDeforestacion) {
        this.indiceDeforestacion = indiceDeforestacion;
    }

    @Override
    public String toString() {
      
        return "Nombre: "+ this.nombre+" Descripción: "+ this.descripcion+" Latitud: "+this.latitud+" Longitud: "+longitud+" Indice Deforestación:"+this.indiceDeforestacion;
    }

}
