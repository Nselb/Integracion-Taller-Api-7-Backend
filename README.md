# Proyecto de Backend

Este proyecto es un backend que se puede ejecutar utilizando Docker y Yarn. A continuación se detallan los pasos necesarios para poner en marcha el proyecto.

## Requisitos

- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Docker](https://www.docker.com/get-started)

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instalar las dependencias con Yarn:

   ```bash
   yarn install
   ```

3. Copiar el archivo `.env.template` y cambiar el nombre a `.env` y cambiar las variables segun quiera.

## Uso

1. Iniciar los contenedores de Docker:

   ```bash
   docker-compose up
   ```

2. Iniciar el servidor de desarrollo:

   ```bash
   yarn start:dev
   ```

   O para iniciar el servidor en modo de producción:

   ```bash
   yarn start
   ```

## Notas

- Asegúrate de tener Docker instalado y en funcionamiento antes de ejecutar `docker-compose up`.
- El comando `yarn start:dev` iniciará el servidor en modo de desarrollo con auto-recarga, mientras que `yarn start` lo hará en modo de producción.
