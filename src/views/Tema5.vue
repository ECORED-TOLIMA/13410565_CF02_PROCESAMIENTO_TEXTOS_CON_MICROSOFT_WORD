<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 5
      h1 Herramientas de revisión

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img-01.png', alt='Imagen decorativa')
      .col-lg-7.mb-lg-0.mb-3.py-3(data-aos="fade-left")
        p Cuando se trabaja en documentos compartidos o que requieren correcciones y mejoras, es fundamental contar con mecanismos que faciliten #[b la colaboración, el control de cambios y la retroalimentación organizada.]
        p Microsoft Word incorpora varias #[b herramientas de revisión] que permiten a diferentes personas trabajar sobre el mismo archivo sin perder la información original. Entre las más importantes se encuentran: #[b Control de cambios, Comentarios y Comparación de documentos.]
        .cajon.cajon.color-primario.p-4.mb-5
          p.mb-0 Estas funciones son ampliamente utilizadas en contextos académicos, empresariales y personales, ya que optimizan el proceso de edición colaborativa y reducen errores al dejar registro claro de cada modificación.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 17.
          span <em>Pestaña “Revisar” en Microsoft Word</em>
          
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/temas/tema5/img-02.png', alt='La figura 17 muestra la pestaña principal "Revisar" de Microsoft Word, utilizada para acceder a las herramientas de colaboración y auditoría al gestionar comentarios y el Control de cambios.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema5/img-02.png', alt='La figura 17 muestra la pestaña principal "Revisar" de Microsoft Word, utilizada para acceder a las herramientas de colaboración y auditoría al gestionar comentarios y el Control de cambios.')        

    .row.justify-content-center.mb-3(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo02(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Importancia de las herramientas de revisión 

    .row.justify-content-center.mb-0
      .col-lg-6.order-lg-1.order-2
        LineaTiempoD.color-acento-botones.especial(data-aos="fade-down")
          .row(numero="1" titulo="Fomentan la colaboración")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permiten que varias personas trabajen en el mismo documento.
          .row(numero="2" titulo="Aumentan la trazabilidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Cada cambio queda registrado y puede aceptarse o rechazarse.
          .row(numero="3" titulo="Mejoran la calidad de los textos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Facilitan correcciones claras y organizadas.
          .row(numero="4" titulo="Evitan confusiones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Los comentarios se asocian a secciones específicas del texto.
          .row(numero="5" titulo="Permiten comparar versiones")
            .col-12.mb-4.mb-md-0
              p.mb-0 Útil para ver qué ha cambiado entre dos archivos.
          .row(numero="6" titulo="Facilitan revisiones sucesivas")
            .col-12.mb-4.mb-md-0
              p.mb-0 Ideal en documentos extensos que pasan por diferentes editores o etapas.
      .col-lg-4.order-lg-2.order-1.mb-3.col-md-8.col-10
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema5/img-03.svg', alt='Imagen decorativa')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Control de cambios

    p(data-aos="fade-right") La herramienta #[b Control de cambios] permite que Word registre automáticamente todas las modificaciones realizadas en un documento. Esto incluye inserciones, eliminaciones, cambios de formato y comentarios, mostrando quién hizo cada ajuste y en qué momento.

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-lg-1.order-2
          p(data-aos="fade-left") Activar esta función es especialmente útil cuando se edita un documento en grupo o cuando se quiere revisar el historial de modificaciones antes de aprobarlas. 
          p(data-aos="fade-right") Para activar el control de cambios:
          .cajon.cajon.C01.p-1.mb-3
            ol.lista-ol--cuadro.lista-ol--separador
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                span Ir a la pestaña #[b “Revisar”] en la cinta de opciones.
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                span Hacer clic en #[b “Control de cambios”] para activarlo.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                span A partir de este momento, todas las modificaciones aparecerán resaltadas en el texto.
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                span Para aprobar o rechazar un cambio, usar las opciones #[b “Aceptar”] o #[b “Rechazar”] en la misma pestaña.
        .col-lg-4.col-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema5/img-15.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 18.
          span <em>Control de cambios activado en Word</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema5/img-05.png', alt='La figura 18 muestra un documento con el Control de cambios activado de Microsoft Word, utilizada para visualizar todas las modificaciones (inserciones, eliminaciones) al registrar quién y cuándo se editó el texto.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema5/img-05.png', alt='La figura 18 muestra un documento con el Control de cambios activado de Microsoft Word, utilizada para visualizar todas las modificaciones (inserciones, eliminaciones) al registrar quién y cuándo se editó el texto.')

    .row.justify-content-center.mb-0
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema5/img-06.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Consejo:] es posible personalizar la forma en que se muestran las marcas (en globos, en línea, por color) desde la opción “Control de cambios”, “Opciones de control de cambios”.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Comparación de documentos

    p(data-aos="fade-down") La función #[b Comparar documentos] permite analizar dos versiones de un mismo archivo y visualizar sus diferencias de forma clara. Word genera un #[b tercer documento] que muestra los cambios detectados (inserciones, eliminaciones y modificaciones).
    p(data-aos="fade-down") Para comparar dos documentos:  

    .tarjeta.tarjeta--BG01.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema5/img-07.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema5/img-08.svg", alt="alt").img100.m-auto
              p 1. Ir a la pestaña #[b “Revisar”].
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema5/img-09.svg", alt="alt").img100.m-auto
              p 2. Hacer clic en #[b “Comparar”].
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema5/img-10.svg", alt="alt").img100.m-auto
              p 3. Seleccionar el documento original y el documento modificado.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema5/img-11.svg", alt="alt").img100.m-auto
              p 4. Presionar #[b Aceptar] para generar la comparación.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema5/img-12.svg", alt="alt").img100.m-auto
              p 5. Revisar el documento combinado con las marcas de cambio visibles.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 19.
          span <em>Ventana de comparación de documentos</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema5/img-13.png', alt='La figura 19 muestra la ventana de la herramienta "Comparar" de Microsoft Word, utilizada para contrastar dos versiones de un mismo documento al resaltar automáticamente las diferencias entre ambas.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema5/img-13.png', alt='La figura 19 muestra la ventana de la herramienta "Comparar" de Microsoft Word, utilizada para contrastar dos versiones de un mismo documento al resaltar automáticamente las diferencias entre ambas.')

    .row.justify-content-center.mb-5
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema5/img-14.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Sugerencia:] esta herramienta es útil cuando varias personas editan diferentes copias del mismo documento o cuando se quiere verificar qué cambios se hicieron entre versiones.

    .row.justify-content-center.align-items-center(data-aos="fade-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
