# Node.js Server

Este es un servidor de inventario construido con Node.js y Express, utilizando JWT para la autenticación y Zod para la validación. También incluye Winston para la gestión de logs y varias medidas de seguridad con Helmet y manejo de cookies.

## Características

- **Autenticación**: Registro, login y logout utilizando JWT.
- **Validación**: Validación de entradas con Zod.
- **Gestión de Logs**: Logs detallados con Winston.
- **Seguridad**: Manejo de cookies y varias configuraciones de seguridad con Helmet.
- **Base de Datos**: Conexión a MongoDB con Mongoose.

## Requisitos

- Node.js v14 o superior
- MongoDB o Mongo Atlas

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/No-Country-simulation/c19-51-n-node-react
    cd tu-repositorio
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
    ```env
    PORT=8000
    MONGODB_URI=mongodb://localhost:27017/inventory
    TOKEN_SECRET=secret
    FRONTEND_URL=http://localhost:3000
    ```

4. Ejecuta el servidor en modo desarrollo:
    ```sh
    npm run dev
    ```

5. Para ejecutar el servidor en producción:
    ```sh
    npm start
    ```

