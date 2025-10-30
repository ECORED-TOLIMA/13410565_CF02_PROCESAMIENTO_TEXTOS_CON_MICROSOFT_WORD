<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 4
      h1 Plantillas

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.svg', alt='Imagen decorativa')
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-left")
        .cajon.cajon.color-primario.p-4.mb-5
          p.mb-0 Cuando se trabaja con documentos que deben mantener un formato uniforme —como informes, presentaciones, instructivos o cartas— es común repetir estructuras, estilos y formatos. Para evitar rehacer todo desde cero cada vez, Microsoft Word ofrece la opción de usar #[b plantillas], que son documentos base preconfigurados que pueden reutilizarse una y otra vez.
        p.mb-4 Una plantilla define #[b la estructura visual y funcional de un documento], incluyendo estilos de título, formato de texto, márgenes, encabezados, pies de página, tablas, gráficos, logotipos y otros elementos que se mantendrán igual en todos los archivos creados a partir de ella.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 15.
          span <em>Ejemplo de plantillas disponibles en Word</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img-02.png', alt='La figura 15 muestra la galería de plantillas predeterminadas de Microsoft Word, utilizada para iniciar un documento con un diseño profesional al reutilizar formatos ya establecidos (currículums, informes entre otros).')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img-02.png', alt='La figura 15 muestra la galería de plantillas predeterminadas de Microsoft Word, utilizada para iniciar un documento con un diseño profesional al reutilizar formatos ya establecidos (currículums, informes entre otros).')

    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo02(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Importancia de las plantillas

        p(data-aos="fade-left") El uso de plantillas en Word ofrece múltiples ventajas tanto para estudiantes como para profesionales:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-03.svg' alt='AvatarTop')
          h4 Estandarización visual
          p.mb-0 Asegura que todos los documentos compartan el mismo estilo y formato.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-04.svg' alt='AvatarTop')
          h4 Ahorro de tiempo
          p.mb-0 Evita configurar márgenes, estilos y encabezados manualmente en cada nuevo documento.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-05.svg' alt='AvatarTop')
          h4 Consistencia estructural
          p.mb-0 Garantiza que todos los apartados se ubiquen en el mismo orden y lugar.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-06.svg' alt='AvatarTop')
          h4 Profesionalismo
          p.mb-0 Mejora la presentación final y facilita la lectura.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-07.svg' alt='AvatarTop')
          h4 Facilidad de colaboración
          p.mb-0 Permite que varias personas trabajen bajo un mismo diseño base.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-08.svg' alt='AvatarTop')
          h4 Reducción de errores
          p.mb-0 Minimiza omisiones en títulos, encabezados o formatos importantes.
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-09.svg' alt='AvatarTop')
          h4 Automatización
          p.mb-0 Simplifica tareas repetitivas y acelera procesos de producción documental.

    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-10.col-12
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0 #[b Ejemplo:] una plantilla para informes semanales puede incluir el logo, la numeración de páginas, los estilos de encabezado y las secciones predefinidas para llenar con nueva información cada semana.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1. Creación de una plantilla

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.mb-4(data-aos="fade-left")
        p Además de las plantillas que Word incluye de forma predeterminada, es posible #[b crear plantillas personalizadas] que se adapten a las necesidades de cada usuario o equipo de trabajo. Esto significa que cualquier documento que contenga un formato repetible puede convertirse en una plantilla reutilizable.
        p Para crear una plantilla desde cero:

      .row.justify-content-center
        .col-lg-3.col-sm-7.col-10.mb-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema4/img-10.svg', alt='Imagen decorativa')

        .col-lg-7
          .cajon.cajon.C01.mb-5
            ol.lista-ol--cuadro.lista-ol--separador
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Abrir un documento nuevo en Word.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | Configurar márgenes, orientación de página y espaciado según sus necesidades.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Aplicar los estilos de título que desee usar de manera estandarizada.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Insertar encabezados, pies de página, numeración y cualquier otro elemento fijo.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                span Guardar el archivo seleccionando #[b “Archivo” → “Guardar como”].
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 6
                span En el campo de tipo de archivo, seleccionar #[b “Plantilla de Word (*.dotx)”].
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 7
                | Asignar un nombre y confirmar la ubicación de guardado.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 16.
          span <em>Guardar un documento como plantilla (.dotx)</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img-12.png', alt='La figura 16 muestra la opción "Guardar como plantilla de Word (*.dotx)", utilizada para convertir un documento con formato propio en un molde reutilizable al establecer una base para futuros archivos.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img-12.png', alt='La figura 16 muestra la opción "Guardar como plantilla de Word (*.dotx)", utilizada para convertir un documento con formato propio en un molde reutilizable al establecer una base para futuros archivos.')

    .row.justify-content-center.mb-0
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema4/img-11.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Consejo:] las plantillas se pueden almacenar en carpetas compartidas, lo que facilita que diferentes personas utilicen la misma base para sus documentos.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2. Uso para estandarización

    p(data-aos="fade-down") Una vez creada, la plantilla puede ser utilizada tantas veces como sea necesario, manteniendo siempre la misma estructura y formato original. Esto resulta especialmente útil en documentos que requieren coherencia y repetición de elementos visuales o informativos.
    p.mb-4(data-aos="fade-down") Para usar una plantilla existente:

    .tarjeta.tarjeta--BG01.mb-4(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema4/img-13.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img-14.svg", alt="alt").img100.m-auto
              p Abrir Microsoft Word.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img-15.svg", alt="alt").img100.m-auto
              p Seleccionar #[b “Archivo” → “Nuevo”].
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img-16.svg", alt="alt").img100.m-auto
              p En la galería, elegir la plantilla deseada (propia o predeterminada).
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img-17.svg", alt="alt").img100.m-auto
              p Completar la información necesaria dentro de los campos establecidos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema4/img-18.svg", alt="alt").img100.m-auto
              p Guardar el documento final con un nombre distinto, para no sobrescribir la plantilla original.
            
    .row.justify-content-center.mb-5
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema4/img-19.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Importante:] la plantilla no se modifica al usarla. Cada nuevo archivo creado a partir de ella es independiente y puede personalizarse sin alterar el original.

    .row.justify-content-center.align-items-center(data-aos="fade-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema4',
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
