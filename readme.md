# 🚀 Desafío Word Counter para Banco Internacional

> **API Procesadora de textos!**
> Realizado por [Sebastián Kravetz](mailto:sebastiankravetz@icloud.com) para Banco Internacional.

Stack utilizado:

- NodeJS
- Express.js
- Handlebars.js

## 📦 Dependencias:

- Microservicio [word-counter-challenge](https://github.com/bi-lriveros/word-counter-challenge/)
  - Java 11
  - Gradle (wrapper incluido)
- NodeJS 16.15.0
  - Paquetes de NPM se instalarán con el primer _npm install_

## 🛠 Instalación y Ejecución:

1. Clonar el repositorio de [word-counter-challenge](https://github.com/bi-lriveros/word-counter-challenge/) y ejecutar:

```
./gradlew bootRun
```

2. Clonar _este_ repositorio en un entorno local. Para instalar las dependencias de la API desarrollada en NodeJS, ejecutar:

```
cd expressjs_api/
npm install
```

3. Para ejecutar la API en modo producción _(directorio "expressjs_api")_:

```
npm start
```

4. Para ejecutar la API en modo desarrollo _(directorio "expressjs_api")_:

```
npm run dev
```

5. Para instalar las dependencias del entorno de desarrollo del front-end con React:

```
cd ..
cd vite_frontend/
yarn install
```

6. Para ejecutar el entorno de desarrollo del frontend de React con Vite _(directorio "vite_frontend")_:

```
yarn dev
```

7. Para generar un _build_ de producción del frontend con React:

```
yarn build
```

_NOTA_: Es muy importante que tanto el microservicio ejecutado en el paso 1 como el servidor ejecutado en el paso 3 corran de forma paralela, ya que se comunican entre sí.

## ⚙️ Configuración:

Se ha proporcionado un archivo _.env.example_ para la configuración de las variables de entorno, en este proyecto en específico para la configuración de los puertos de escucha del servidor de acuerdo al modo de ejecución (producción ó desarrollo), se sugiere renombrar este archivo a .env para que el servidor pueda utilizar las variables en él declaradas.

## 🔐 Acceso:

- Para la API construida en NodeJs y el frontend construido con motor de plantillas (Handlebars):
  &nbsp;
  En modo producción, la aplicación escuchará en el puerto 3000

  ```
  http://localhost:3000
  ```

  En modo desarrollo, la aplicación escuchará en el puerto 1337

  ```
  http://localhost:1337
  ```

- Para el entorno de desarrollo Vite del frontend construido con React:
  &nbsp;
  ```
  http://localhost:3001
  ```

## 📚 Documentación de la API:

Una completa documentación de la API en sus versiones v1 (_stable_) y v2 (_alpha_) se encuentra en la siguiente ruta disponible al ejecutar el servidor:

```
(en producción) http://localhost:3000/docs
(en desarrollo) http://localhost:1337/docs
```

Allí encontrará el detalle de los endpoints, esquema de datos entregado y filtros disponibles.

## ✍️ Notas:

- Se respetó la lógica de aleatoreidad del texto, por lo que no se implementó ningún tipo de persistencia de datos.
- En la versión 2 (v2) de la API se implementa una paginación de la misma con filtros opcionales, pero ya que no hay una persistencia de datos al cambiar de página el texto procesado también cambia, por lo que ésta sólo queda para fines de demostración de la implementación.
- Al no existir un criterio preciso para considerar las palabras (articulos, sustantivos, conjunciones), se optó por implementar un filtro de longitud de palabra por cantidad de carácteres que la conforman, como se detalla en la documentación de la API.
- ¡Gracias por la oportunidad! :)
