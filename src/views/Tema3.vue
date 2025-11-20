<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 3
      h1 Tablas de contenido

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Cuando se trabaja con documentos extensos —como informes, trabajos académicos, manuales o guías— es común que contengan múltiples títulos, subtítulos y apartados. Para facilitar su lectura y navegación, Word ofrece la herramienta #[b Tabla de contenido], que permite generar automáticamente un índice estructurado con base en los estilos de título aplicados al documento.

    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-7.col-10.mb-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-02.png', alt='Imagen decorativa')

      .col-lg-6(data-aos="fade-left")
        p La tabla de contenido actúa como un “mapa” que resume la estructura del texto, mostrando los encabezados principales y sus ubicaciones dentro del documento. Además, estos índices son interactivos: al hacer clic en cualquiera de sus elementos, el usuario puede desplazarse directamente a la sección correspondiente.
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Importancia de las tablas de contenido

        ul.lista-ul--color.mb-4
          li(data-aos="fade-down")
            i.fas.fa-hand-point-right
            p.mb-0 Facilitan la navegación en documentos largos. 
          li(data-aos="fade-down")
            i.fas.fa-hand-point-right
            p.mb-0 Permiten una estructura jerárquica clara.
          li(data-aos="fade-down")
            i.fas.fa-hand-point-right
            p.mb-0 Ahorran tiempo en la creación y actualización de índices.
          li(data-aos="fade-down")
            i.fas.fa-hand-point-right
            p.mb-0 Mejoran la presentación profesional de informes y trabajos.
          li(data-aos="fade-down")
            i.fas.fa-hand-point-right
            p.mb-0 Mantienen sincronía automática con los títulos reales del documento.

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-10.col-12
        p A continuación se presenta un ejemplo de tabla de contenido automática generada por Word, que organiza títulos y subtítulos con sus respectivas páginas.

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span <em>Ejemplo de tabla de contenido en un documento de Word</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img-22.png', alt='Figura 11 que representa una tabla de contenido en Word con niveles jerárquicos y numeración de página alineada a la derecha.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema3/img-22.png', alt='Figura 11 que representa una tabla de contenido en Word con niveles jerárquicos y numeración de página alineada a la derecha.')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1. Generación automática de tabla de contenido

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#B0C2E5")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-04.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Word permite generar una tabla de contenido de #[b forma automática] si previamente se han aplicado estilos de título a los encabezados del documento. Esto significa que no es necesario crearla manualmente ni escribir los números de página: la herramienta detecta los estilos jerárquicos y construye el índice de manera ordenada.
        br
        br
        p Antes de crear la tabla, es importante verificar que todos los títulos y subtítulos tengan asignado un estilo de título adecuado, ya que #[b solo los textos con estilos de título] aparecerán en la tabla de contenido.

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.mb-4
        p(data-aos="fade-left") Para generar una tabla de contenido automática:

        .cajon.cajon.C01.p-4.mb-3
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Aplique los estilos de título a todos los encabezados del documento (por ejemplo, “Título 1” para secciones principales, “Título 2” para subsecciones, etc.).
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Coloque el cursor en el lugar donde desea insertar la tabla.
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 3
              span Diríjase a la pestaña #[b “Referencias”] en la cinta de opciones.
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 4
              span Haga clic en #[b “Tabla de contenido”].
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Seleccione uno de los estilos automáticos predeterminados.
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Word insertará la tabla de contenido con los títulos y números de página correspondientes.

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-10.col-12
        p La figura a continuación ejemplifica las opciones del menú Tabla de contenido, desde donde se puede insertar una versión automática o manual.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 12.
          span <em>Menú de tabla de contenido en Word</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img-23.png', alt='Figura 12 que describe el menú desplegable de Word con las plantillas integradas para crear una tabla de contenido.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema3/img-23.png', alt='Figura 12 que describe el menú desplegable de Word con las plantillas integradas para crear una tabla de contenido.')

    .row.justify-content-center.mb-0
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema3/img-21.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Consejo:] si cambia títulos o agrega secciones después de crear la tabla, no es necesario rehacerla. Solo debe actualizarse para reflejar los cambios.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2. Niveles y personalización

    p(data-aos="fade-down") Las tablas de contenido de Word se basan en niveles jerárquicos. Esto significa que el documento puede tener diferentes “profundidades” en su estructura, dependiendo de cuántos estilos de título se utilicen.
    p.mb-4(data-aos="fade-down") Por ejemplo:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-07.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#DBE4F4")
            h4.text-center.mt-5(style="color:#12263F") Nivel 1
            p.text-center.mb-0(style="color:#12263F") Corresponde a “Título 1” —secciones principales.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-08.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#DBE4F4")
            h4.text-center.mt-5(style="color:#12263F") Nivel 2
            p.text-center.mb-0(style="color:#12263F") Corresponde a “Título 2” —subsecciones.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img-09.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#DBE4F4;")
            h4.text-center.mt-5(style="color:#12263F") Nivel 3
            p.text-center.mb-0(style="color:#12263F") Corresponde a “Título 3” —subapartados.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        p Esta jerarquía permite #[b crear índices claros y organizados], en los que se puede distinguir visualmente entre secciones, subsecciones y detalles más específicos.
        p Para personalizar la tabla de contenido:

    .tarjeta--BG01.px-md-5.p-lg-0.p-4.mb-5
      .row.justify-content-center.align-items-center.my-lg-5.my-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
          figure
            img(src="@/assets/curso/temas/tema3/img-10.png", alt="alt" style='margin-bottom: -23px;')
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-4 col-xl-4")
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema3/img-11.svg", alt="alt")
              p.text-center 1. Haga clic sobre la tabla existente.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema3/img-12.svg", alt="alt")
              p.text-center 2. Seleccione la opción #[b “Tabla de contenido personalizada…”].
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema3/img-13.svg", alt="alt")
              p.text-center 3. En el cuadro de diálogo, defina cuántos niveles de títulos desea incluir.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema3/img-14.svg", alt="alt")
              p.text-center 4. Puede modificar la alineación, los puntos de tabulación y el estilo de numeración de páginas.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema3/img-15.svg", alt="alt")
              p.text-center 5. Confirme con #[b Aceptar].

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-10.col-12
        p A continuación se incluye la figura que muestra el cuadro de diálogo utilizado para personalizar el formato y los niveles de la tabla de contenido.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 13.
          span <em>Cuadro de diálogo de tabla de contenido personalizada</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img-24.png', alt='Figura 13 que corresponde a la ventana de configuración de tabla de contenido personalizada con opciones para formato, niveles y vista previa.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema3/img-24.png', alt='Figura 13 que corresponde a la ventana de configuración de tabla de contenido personalizada con opciones para formato, niveles y vista previa.')

    .row.justify-content-center.mb-0
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema3/img-20.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Importante:] si se seleccionan demasiados niveles, la tabla puede volverse extensa y difícil de leer. Generalmente, incluir hasta tres niveles ofrece un buen balance entre detalle y claridad.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3. Actualización de la tabla de contenido

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img-17.png', alt='Imagen decorativa')
      .col-lg-7.mb-lg-0.mb-4
        p(data-aos="fade-left") Una de las mayores ventajas de usar tablas de contenido automáticas es que pueden #[b actualizarse fácilmente] cuando se realizan cambios en el documento, como agregar o eliminar secciones, mover párrafos o renumerar páginas.
        p.mb-4(data-aos="fade-right") Para actualizar la tabla:
        .cajon.cajon.C01.mb-3
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Haga  clic derecho sobre la tabla de contenido.
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              span Seleccione #[b “Actualizar campos”].
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Elija entre actualizar solo los números de página o actualizar toda la tabla.
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Confirme para que los cambios se apliquen automáticamente.

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-10.col-12
        p La siguiente figura ilustra cómo acceder a la opción para actualizar los campos de una tabla de contenido después de realizar cambios en el texto.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 14.
          span <em>Menú de tabla de contenido en Word</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema3/img-25.png', alt='Figura 14 que representa la opción “Actualizar campos” del menú contextual de una tabla de contenido en Word.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema3/img-25.png', alt='Figura 14 que representa la opción “Actualizar campos” del menú contextual de una tabla de contenido en Word.')

    .row.justify-content-center.mb-5
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema3/img-19.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Recomendación:] actualice siempre la tabla antes de entregar o compartir un documento final, para asegurar que todos los títulos y páginas estén sincronizados.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo02(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico 3:

    p.mb-5 Por medio del siguiente video, podrá conocer paso a paso cómo crear, personalizar y actualizar una tabla de contenido en Microsoft Word.

    .row.justify-content-center.align-items-center(data-aos="fade-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/tpe0jd_vxrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Tema3',
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
