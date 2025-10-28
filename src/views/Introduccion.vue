<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/introduccion/img-01.png', alt='Imagen decorativa')
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-left")
        p.mb-5 En la actualidad, la elaboración de documentos digitales requiere no solo conocimientos básicos de procesamiento de texto, sino también la capacidad de aplicar herramientas que permitan organizar, estructurar y presentar información de manera clara, eficiente y estandarizada.
        .cajon.cajon.color-primario.p-4.mb-5
          p.mb-0 Microsoft Word ofrece una serie de funciones que facilitan esta tarea, entre ellas la inserción de tablas y figuras para organizar datos, la gestión de referencias y bibliografía para citar adecuadamente las fuentes utilizadas, y la creación de tablas de contenido automáticas para facilitar la navegación.
        p.mb-5 Asimismo, las plantillas permiten reutilizar estructuras y estilos visuales, asegurando coherencia en documentos recurrentes. Por último, las herramientas de revisión —como control de cambios, comentarios y comparación de documentos— son fundamentales para trabajar de manera colaborativa y llevar un registro ordenado de las modificaciones realizadas.
    
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 Este componente formativo propone un recorrido guiado por estas herramientas, combinando explicaciones conceptuales con ejercicios prácticos diseñados como guion para video, de manera que el aprendiz pueda comprender no solo cómo usar cada función, sino también en qué situaciones aplicarla.

        p Al finalizar, contará con un conjunto de competencias prácticas para producir documentos digitales con un alto nivel de presentación y funcionalidad. 
        p Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center(data-aos="fade-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
