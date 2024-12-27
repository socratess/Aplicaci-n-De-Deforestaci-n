package com.empresa.cruddeforestacionapi.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;

@Component
public class DatabaseInitializer implements CommandLineRunner {


@Autowired
private EntityManager entityManager;


    @Transactional
    @Override
    public void run(String... args) throws Exception {

        entityManager.createNativeQuery(
            "CREATE OR REPLACE VIEW vista_areas_criticas_con_evaluaciones AS " + 
            "SELECT ac.id, ac.nombre, ac.descripcion, COUNT(ef.id) AS numero_evaluaciones " + 
            "FROM areas_criticas ac " +
            "LEFT JOIN evaluaciones_ferroviarias ef "+
            "ON ac.id = ef.area_critica_id " +
            "GROUP BY ac.id, ac.nombre, ac.descripcion " +
            "HAVING numero_evaluaciones > 0"
            ).executeUpdate();


            entityManager.createNativeQuery("DROP FUNCTION IF EXISTS calcular_indice_deforestacion").executeUpdate();
      
            entityManager.createNativeQuery(
"CREATE FUNCTION calcular_indice_deforestacion(area_id BIGINT) RETURNS DECIMAL(10, 2) "+
"BEGIN "+
"DECLARE indice DECIMAL(10, 2); "+
"SET indice= (SELECT COUNT(*) FROM evaluaciones_ferroviarias WHERE area_critica_id= area_id) * 1.5; " +
"RETURN indice; "+
"END"
).executeUpdate();

entityManager.createNativeQuery("DROP TRIGGER IF EXISTS actualizar_indice_deforestacion").executeUpdate();

entityManager.createNativeQuery(
"CREATE TRIGGER actualizar_indice_deforestacion "+
"AFTER INSERT ON evaluaciones_ferroviarias "+
"FOR EACH ROW " +
"BEGIN "+
"UPDATE areas_criticas "+
"SET indice_deforestacion = calcular_indice_deforestacion(NEW.area_critica_id) "+
"WHERE id= NEW.area_critica_id; "+
"END"
).executeUpdate();


entityManager.createNativeQuery("DROP PROCEDURE IF EXISTS insertar_evaluacion"
).executeUpdate();

entityManager.createNativeQuery( 
    "CREATE PROCEDURE insertar_evaluacion(IN nombreRuta VARCHAR(255), IN informeViabilidad TEXT, IN areaCriticaEntityId BIGINT, OUT nuevo_id BIGINT) "+
    "BEGIN "+
    "INSERT INTO evaluaciones_ferroviarias(nombre_ruta, informe_viabilidad, fecha_evaluacion, area_critica_id) "+
    "VALUES (nombreRuta, informeViabilidad, NOW(), areaCriticaEntityId); "+
    "SET nuevo_id= LAST_INSERT_ID(); "+
    "END"
    ).executeUpdate();


 }
}
