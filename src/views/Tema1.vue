<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Tablas y figuras en Microsoft Word

    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-left") En la elaboración de documentos, las tablas y figuras permiten organizar y presentar la información de forma clara y visualmente comprensible. Las tablas facilitan la estructuración de datos en filas y columnas, mientras que las figuras ayudan a ilustrar ideas, procesos o ejemplos que complementan el contenido textual. Su uso adecuado mejora la presentación, permite identificar patrones de información y facilita la lectura, especialmente en documentos extensos o con alto contenido informativo. Gracias a estas herramientas, es posible crear informes, trabajos escritos, presentaciones y otros documentos con un formato más ordenado y profesional.

    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-7.col-10.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-02.svg', alt='Imagen decorativa')

      .col-lg-6(data-aos="fade-left")
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Importancia de las tablas y figuras

        .cajon.cajon.C01.p-1.mb-3
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Permiten organizar información compleja de manera visual.
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Mejoran la comprensión y la lectura del contenido.
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Aumentan la claridad y la estética de los documentos.
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Hacen posible integrar texto y elementos gráficos de manera coherente.
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Facilitan la comparación de datos y conceptos.

    .row.justify-content-center.mb-0(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <em>Ejemplo de tabla y figura en un documento de word</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema1/img-03.png', alt='Figura 3 que relaciona la configuración de párrafo con interlineado doble y espaciado anterior y posterior en 0 pts.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema1/img-03.png', alt='Figura 3 que relaciona la configuración de párrafo con interlineado doble y espaciado anterior y posterior en 0 pts.')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1. Inserción de tablas

    .bg-c1.px-md-5.px-4.mb-0
      p(data-aos="fade-left") Las tablas son uno de los elementos más utilizados para #[b organizar datos y texto de manera estructurada]. A diferencia del texto corrido, permiten visualizar la información por categorías, fechas, valores, nombres, pasos de un proceso o cualquier otro criterio que requiera una organización clara. 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2
          p(data-aos="fade-right") Para insertar una tabla básica en Microsoft Word, es posible usar la cuadrícula visual que aparece al abrir la opción correspondiente. Este método permite definir, de forma rápida el número de filas y columnas que se necesitan. Se ilustra en la figura 2 y los pasos para insertar una tabla son:
          .cajon.cajon.C01.p-1.mb-3
            ol.lista-ol--cuadro.lista-ol--separador
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Ubicar el cursor en el lugar del documento donde se desea insertar la tabla.
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                span Ir a la pestaña #[b “Insertar”] en la cinta de opciones.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                span Hacer clic en #[b “Tabla”].
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Desplazar el cursor por la cuadrícula hasta seleccionar el número deseado de filas y columnas.
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                | Hacer clic para insertar la tabla en el documento.
        .col-lg-5.col-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema1/img-20.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <em>Menú de inserción de tabla en Word</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema1/img-04.png', alt='La figura 2 muestra la pestaña “Insertar” de Microsoft Word, con el comando “Tabla” desplegado y la cuadrícula para seleccionar el número de filas y columnas. En el documento se visualiza una tabla insertada como ejemplo. ')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema1/img-04.png', alt='La figura 2 muestra la pestaña “Insertar” de Microsoft Word, con el comando “Tabla” desplegado y la cuadrícula para seleccionar el número de filas y columnas. En el documento se visualiza una tabla insertada como ejemplo. ')

    .row.justify-content-center.mb-0
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="fade-left").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema1/img-05.svg', alt='').m-auto
          .col-xl
            p.mb-0 Una vez insertada, la tabla se puede modificar en cualquier momento para ajustar su tamaño, agregar o eliminar filas y columnas, o aplicar un formato diferente.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2. Formato y diseño de tablas

    p(data-aos="fade-left") Una tabla no solo organiza datos, sino que también puede mejorar considerablemente la #[b presentación visual] de un documento. Word ofrece herramientas para personalizar bordes, colores, estilos y alineaciones, lo que permite que la tabla se adapte al propósito del texto.  
    p(data-aos="fade-right") Al hacer clic en cualquier parte de la tabla, aparecen dos pestañas adicionales en la cinta de opciones: #[b “Diseño de tabla”] y #[b “Disposición de tabla”]. Desde allí, se pueden aplicar estilos predefinidos o personalizar manualmente.
    p.mb-5(data-aos="fade-left") Algunas acciones comunes para mejorar la apariencia de una tabla son:

    .tarjeta.tarjeta--BG01.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img-11.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img-06.svg", alt="alt").img100.m-auto
              p Aplicar #[b estilos predeterminados] para cambiar bordes, sombreados y colores
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img-07.svg", alt="alt").img100.m-auto
              p Combinar o dividir celdas para reorganizar la información
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img-08.svg", alt="alt").img100.m-auto
              p Alinear el texto en el centro, izquierda, derecha o de manera vertical
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img-09.svg", alt="alt").img100.m-auto
              p Cambiar el grosor o el color de los bordes
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/img-10.svg", alt="alt").img100.m-auto
              p Aplicar sombreado a filas o columnas para resaltar datos específicos

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <em>Herramientas de formato de tabla en Word</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema1/img-12.png', alt='En la figura 3 se presenta la Ventana de Microsoft Word con una tabla seleccionada y las pestañas “Diseño de tabla” y “Disposición de tabla” visibles en la cinta de opciones, que muestran las herramientas para aplicar estilos, bordes y sombreados a una tabla. ')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema1/img-12.png', alt='En la figura 3 se presenta la Ventana de Microsoft Word con una tabla seleccionada y las pestañas “Diseño de tabla” y “Disposición de tabla” visibles en la cinta de opciones, que muestran las herramientas para aplicar estilos, bordes y sombreados a una tabla. ')

    .row.justify-content-center.mb-0
      .col-xl-10
        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema1/img-13.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Consejo:] aplicar estilos de tabla consistentes en todo el documento contribuye a una presentación más ordenada y facilita la lectura.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3. Inserción de figuras o imágenes

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#B0C2E5")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-14.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Además de las tablas, Word permite insertar #[b figuras e imágenes] para ilustrar ideas o complementar la información escrita. Estas imágenes pueden provenir del equipo del usuario, de internet o de otros documentos.
        br
        br
        p Al incluir imágenes, es importante cuidar su tamaño, resolución y ubicación, de modo que no interrumpan el flujo del texto. Una imagen clara y bien ubicada puede transmitir más información que un párrafo extenso.

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10.col-12
          p(data-aos="fade-right") Para insertar una imagen en Word, se deben seguir estos pasos:

          .cajon.cajon.C01.p-1.mb-3
            ol.lista-ol--cuadro.lista-ol--separador
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                span Ir a la pestaña #[b “Insertar”.]
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                span Seleccionar #[b “Imágenes”] para cargar un archivo desde el computador o #[b “Imágenes en línea”] para buscar desde la web.
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                span Seleccionar la imagen deseada y hacer clic en #[b “Insertar”].
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Ajustar el tamaño con los controladores de esquina.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                span Usar la opción #[b “Con ajuste de texto”] para definir cómo se distribuye el texto alrededor de la imagen.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span <em>Opciones de inserción y ajuste de imagen</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema1/img-15.png', alt='La figura 4 muestra la Ventana de Microsoft Word con una imagen insertada y el panel “Opciones de diseño”, donde se configuran el ajuste de texto y la posición de la figura en el documento.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema1/img-15.png', alt='La figura 4 muestra la Ventana de Microsoft Word con una imagen insertada y el panel “Opciones de diseño”, donde se configuran el ajuste de texto y la posición de la figura en el documento.')

    .row.justify-content-center.mb-0
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema1/img-16.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Sugerencia:] elegir la opción “Cuadrado” al ajustar el texto permite ubicar la imagen a un lado del texto sin que lo desplace completamente hacia arriba o abajo.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4. Creación de títulos y fuentes de figuras y tablas

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.mb-4(data-aos="fade-right")
        p Una práctica recomendada al trabajar con tablas o figuras es #[b asignarles un título o leyenda], ya que esto permite identificarlas fácilmente, hacer referencias dentro del documento y generar automáticamente un índice de ilustraciones, si es necesario.
        p Word ofrece una herramienta sencilla para insertar títulos numerados, tanto en tablas como en figuras. Esto ayuda a mantener un orden visual y facilita la comprensión cuando hay varios elementos gráficos en un mismo texto.  Los pasos para insertar un título son:

      .row.justify-content-center
        .col-lg-5.col-sm-7.col-10.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema1/img-17.svg', alt='Imagen decorativa')

        .col-lg-5(data-aos="fade-left")
          .cajon.cajon.C01.p-4.mb-3
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta(data-aos="fade-down")
                  span.text-bold 1
                | Seleccionar la tabla o figura a titular.
              li 
                .lista-ol--cuadro__vineta(data-aos="fade-down")
                  span.text-bold 2
                span Hacer clic derecho y elegir #[b “Insertar título”.]
              li 
                .lista-ol--cuadro__vineta(data-aos="fade-down")
                  span.text-bold 3
                | Escoger la etiqueta correspondiente (Tabla o Figura).
              li 
                .lista-ol--cuadro__vineta(data-aos="fade-down")
                  span.text-bold 4
                | Escribir un título breve y descriptivo.
              li 
                .lista-ol--cuadro__vineta(data-aos="fade-down")
                  span.text-bold 5
                span Confirmar con #[b “Aceptar”.]

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span <em>Cuadro de diálogo Insertar título</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema1/img-18.png', alt='La figura 5 muestra la Ventana “Título” de Microsoft Word que permite asignar un rótulo y número automático a una figura o tabla, especificando su posición y tipo de leyenda.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema1/img-18.png', alt='La figura 5 muestra la Ventana “Título” de Microsoft Word que permite asignar un rótulo y número automático a una figura o tabla, especificando su posición y tipo de leyenda.')

    .row.justify-content-center.mb-5
      .col-lg-5.order-lg-1.order-2
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Ejemplo
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Tabla 1. Ejemplo de tabla con formato predefinido  
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Figura 1. Ejemplo de imagen insertada y ajustada en Word
        
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Estos títulos aparecen normalmente debajo de las figuras y encima de las tablas, aunque Word permite cambiar esta configuración según la necesidad.
      .col-lg-5.order-lg-2.order-1.mb-3.col-md-5.col-7
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema1/img-19.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center(data-aos="fade-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema1',
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
