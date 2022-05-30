# 🚀 Desafío Word Counter para Banco Internacional

---

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

2. Clonar _este_ repositorio en un entorno local y ejecutar (debe esperar a que se instalen las dependencias npm):

```
npm install
```

3. Para ejecutar en modo producción:

```
npm start
```

4. Para ejecutar en modo desarrollo:

```
npm run dev
```

_NOTA_: Es muy importante que tanto el microservicio ejecutado en el paso 1 como el servidor ejecutado en el paso 2 corran de forma paralela, ya que se comunican entre sí.

## 🔐 Acceso:

En modo producción, la aplicación escuchará en el puerto 3000

```
http://localhost:3000
```

En modo desarrollo, la aplicación escuchará en el puerto 1337

```
http://localhost:1337
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
- Al no existir un criterio preciso para considerar las palabras (articulos, sustantivos, conjunciones), se optó por implementar un filtro de longitud de palabra por cantidad de carácteres que la conforman, como se puede revidar en la documentación de la API.
- ¡Gracias por la oportunidad! :)
