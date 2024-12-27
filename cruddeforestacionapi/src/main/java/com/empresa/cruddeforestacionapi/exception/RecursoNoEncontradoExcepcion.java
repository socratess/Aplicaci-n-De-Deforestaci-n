package com.empresa.cruddeforestacionapi.exception;


public class RecursoNoEncontradoExcepcion extends RuntimeException{

    //private static final long serialVersionID=1L;

    public RecursoNoEncontradoExcepcion(String mensaje){
        super(mensaje);
    }
}
