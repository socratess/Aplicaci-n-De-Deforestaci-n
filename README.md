
# Aplicación de Deforestación

Este proyecto es una aplicación que permite gestionar áreas críticas, evaluaciones ferroviarias y visualizar la deforestación en relación con las áreas críticas, así como cuántas evaluaciones ferroviarias tienen lugar en dichas áreas. El backend utiliza **Spring Boot** y el frontend está desarrollado con **React** y **React-Bootstrap**.

## Tecnologías Utilizadas

### Backend
- **Spring Boot**
  - Arquitectura basada en microservicios.
  - Capas utilizadas:
    - **Controladores:** Manejan las solicitudes HTTP y delegan la lógica a los servicios.
    - **Servicios:** Implementan la lógica del negocio.
    - **Repositorios:** Interactúan con la base de datos.
    - **DTO (Data Transfer Object):** Gestionan la transferencia de datos entre capas.
    - **Entidades:** Representan los objetos del modelo de dominio.
    - **Excepciones:** Manejan errores personalizados para mejorar la experiencia del usuario.
    - **Mapper Configuración:** Transforma datos entre entidades y DTOs.

### Frontend
- **React**
- **React-Bootstrap**: Utilizado para componentes estilizados y una interfaz moderna.

## Características Principales

1. **Gestión de áreas críticas:**
   - Crear, actualizar y eliminar áreas críticas.
   - Visualizar las áreas registradas.

2. **Evaluaciones ferroviarias:**
   - Crear y gestionar evaluaciones relacionadas con infraestructuras ferroviarias.

3. **Relación entre áreas críticas y evaluaciones ferroviarias:**
   - Visualizar la cantidad de evaluaciones ferroviarias asociadas a cada área crítica.

4. **Visualización de deforestación:**
   - Analizar los datos de deforestación en relación con las áreas críticas.

## Instalación y Configuración

### Backend
1. Clona el repositorio:
   ```bash
   git clone https://github.com/socratess/Aplicaci-n-De-Deforestaci-n.git
   ```
2. Navega al directorio del backend:
   ```bash
   cd cruddeforestacionapi
   ```
3. Configura el archivo `application.properties` con los detalles de tu base de datos.
4. Ejecuta el backend:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend
1. Navega al directorio del frontend:
   ```bash
   cd clientedeforestacionapi
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm start
   ```

## Uso

1. Accede a la aplicación a través de tu navegador en [http://localhost:3000](http://localhost:3000).
2. Utiliza las diferentes secciones de la aplicación para gestionar áreas críticas, evaluaciones ferroviarias y visualizar datos de deforestación.

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agregada nueva funcionalidad"
   ```
4. Sube tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request en el repositorio principal.
