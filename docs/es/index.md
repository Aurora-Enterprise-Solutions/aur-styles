# Introducción

Bienvenido a la documentación oficial de los estilos de Aurora. En esta guia y documentación aprenderá a implementar
los estilos definidos por la empresa para sus proyectos. Básicamente los estilos son un archivo .css que se aplica por
sobre el framework [Vuetify.js](https://vuetifyjs.com/).

## Instalación

Para comenzar a utilizar los estilos de Aurora se requiere instalar el siguiente paquete:

```shell
yarn add @aurora-enterprise-solutions/aur-styles
```

Luego como siguiente paso, se debe instalar el framework de Vuetify.js:

```shell
yarn add @nuxtjs/vuetify@2.6.3
```

::: warning Importante
Los estilos presentados en esta guía obedecen a la versión del framework especificada anteriormente en el comando **(2.6.3)**. Cualquier actualización o soporte de una versión posterior, deberá ser publicado explícitamente en esta sección de la guía.
:::

## Uso de los estilos

Para comenzar a utilizar los estilos, se debe importar la hoja de estilos en su archivo de configuración:

### Nuxt.js

```js
// nuxt.config.js

export default {
    css: [
        '@aurora-enterprise-solutions/aur-styles/styles/aur-styles.min.css'
    ],
}
```

## Soporte

Ante cualquier inconveniente, duda o sugerencia, puede crear un ticket en la sección de *issues* ingresando a nuestro repositorio [aur-styles](https://github.com/Aurora-Enterprise-Solutions/aur-styles/aur-styles).
