# demo.microservices
Demo de una arquitectura basica backend de microservicios basado en colas de Redis, orientado a manejar una gran cantidad de peticiones
para creacon de nuevos elementos.

## Tabla de contenido

* [About](#about)
  * [Schema](#schema)
  * [Client UI](#client-ui)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Local Installation](#local-installation)

## About
El sistema cuenta con dos microservicios para gestionar los USUARIOS y PRODUCTOS, desde el cliente 
se generan nuevos elementos pasando por una Api gateway, esta encola nuevos job's en sus respectivas colas de Redis,
cada microservicio toma su nuevo job y lo procesa según sus propias reglas de negocio, almacenando los registros 
nuevos en sus DB's

El cliente mantiene una conexión directa con cada microservio, quien dispone de un endpoint de obtención de datos

### Schema
<img src="https://github.com/fquezadageldres/demo.microservices/blob/dev/schema.png">

### Client UI
El cliente cuenta con una interfaz sencilla en tiempo real que muestra formularios para la creacion de USUARIOS y PRODUCTOS,  
encolamiento de los procesos y los registros ya guardados en cada DB, pasando por el flujo completo
<img src="https://github.com/fquezadageldres/demo.microservices/blob/dev/client.png" width="600px">


## Getting Started

### Prerequisites
Para correr este proyecto es necesario tener instalado previamente

* Docker en la máquina local (HiperV Habilitado)
* Nodejs
* PostgreSQL

### Local Installation

1. Clona el proyecto

```bash
  git clone https://github.com/fquezadageldres/demo.microservices.git
```

2. Instala las dependencias

```bash
  npm i
```

3. Levantar docker: MySQL y Redis

```bash
  docker-compose up -d
```


#### Los siguientes pasos deben aplicar para cada uno de los sistemas


4. Crea las variables de entorno .ENV  en  **api.service.user, api.service.product y api.gateway**

5. Inicia la bd con Prisma en  **api.service.user y api.service.product**

```bash
  npx prisma generate
  npx prisma migrate dev
```

6. Inicia el consumidor de redis y la API en **api.service.user y api.service.product**

```bash
  npm run watcher
  npm run api
```

7. Inicia la API en: **api.gateway**

```bash
  npm run api
```

8. Inicia en **client**

```bash
  npm start
```
