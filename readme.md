# 🚀 Desafío Word Counter para Banco Internacional

> **API Procesadora de textos!**
> Realizado por [Sebastián Kravetz](mailto:sebastiankravetz@icloud.com) para Banco Internacional. Este proyecto se compone de dos microservicios: 1) Api procesadora de textos (Node.js); 2) Front-End (React.js/Vite)

Stack utilizado:

- NodeJS
- Express.js
- React.js (front-end v2)
- Handlebars.js (front-end v1)

## 📦 Dependencias:

- Microservicio [word-counter-challenge](https://github.com/bi-lriveros/word-counter-challenge/)
  - Java 11
  - Gradle (wrapper incluido)
- NodeJS 16.15.0 (carpeta ["expressjs_api"](https://github.com/wwiiddeeweb/bint_word-counter-challenge/tree/main/expressjs_api))
  - Paquetes de NPM se instalarán con el primer _npm install_
- Vite 2.9.9 (carpeta ["vite_frontend"](https://github.com/wwiiddeeweb/bint_word-counter-challenge/tree/main/vite_frontend))
  - Paquetes NPM se instalarán con el primer _yarn install_

## 🛠 Instalación y Ejecución:

1. Clonar el repositorio de [word-counter-challenge](https://github.com/bi-lriveros/word-counter-challenge/) y ejecutar:

```
./gradlew bootRun
```

2. Clonar _este_ repositorio en un entorno local. Para instalar las dependencias de la API desarrollada en NodeJS, ejecutar en el directorio raíz:

```
cd expressjs_api/
npm install
```

3. Para ejecutar la API (Node.js) en modo producción _(directorio "expressjs_api")_:

```
npm start
```

4. Para ejecutar la API (Node.js) en modo desarrollo _(directorio "expressjs_api")_:

```
npm run dev
```

5. Para instalar las dependencias del entorno de desarrollo del front-end con React, desde el directorio raíz:

```
cd vite_frontend/
yarn install
```

6. Para ejecutar el entorno de desarrollo del frontend de React con Vite _(directorio "vite_frontend")_:

```
yarn dev
```

7. Para generar un _build_ de producción del frontend con React _(directorio "vite_frontend")_:

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

## 🧪 Testing (Front-End)

Se ha incorporado una suite de tests con JEST para los componentes, helpers y hooks del frontend con React.

_PD: Se están incorporando nuevos tests de forma incremental_

Sobre el directorio raíz, ejecutar:

```
cd vite_frontend/
yarn test
```

Una vez dentro de la suite, para filtrar por algún componente en especial, puede pulsar la tecla [p] y filtrar por el nombre del componente.

Para obtener el reporte de _test coverage_:

```
cd vite_frontend/
yarn test-coverage
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
- ¡Seguimos trabajando! 🤘
