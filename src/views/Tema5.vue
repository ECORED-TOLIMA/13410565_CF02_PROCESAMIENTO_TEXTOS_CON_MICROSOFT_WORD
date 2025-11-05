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

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-10.col-12
        p A continuación se incluye la figura que ejemplifica la pestaña “Revisar”, utilizada para agregar comentarios, verificar ortografía y evaluar accesibilidad.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 17.
          span <em>Pestaña “Revisar” en Microsoft Word</em>
          
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/temas/tema5/img-16.png', alt='Figura 17 que representa la pestaña Revisar de Word con las herramientas de corrección, comentarios y control de cambios.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema5/img-16.png', alt='Figura 17 que representa la pestaña Revisar de Word con las herramientas de corrección, comentarios y control de cambios.')        

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

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-10.col-12
        p La siguiente figura incluye la sección donde se encuentra la opción de control de cambios, útil para visualizar modificaciones y comentarios colaborativos.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 18.
          span <em>Control de cambios activado en Word</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema5/img-17.png', alt='Figura 18 que representa la vista de Word donde se encuentra la opción de control de cambios.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema5/img-17.png', alt='Figura 18 que representa la vista de Word donde se encuentra la opción de control de cambios.')

    .row.justify-content-center.mb-5
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema5/img-06.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Consejo:] es posible personalizar la forma en que se muestran las marcas (en globos, en línea, por color) desde la opción “Control de cambios”, “Opciones de control de cambios”.

    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Comentarios 

    p La función de #[b Comentarios] permite agregar observaciones, sugerencias o aclaraciones sobre fragmentos específicos del texto sin modificarlos directamente.
    p.mb-5 Esta herramienta es especialmente útil para #[b dar retroalimentación] o hacer anotaciones colaborativas durante la revisión de documentos, garantizando que las ideas o propuestas de mejora queden registradas sin alterar el contenido original.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--C02.mb-5.tarjeta
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/temas/tema5/img-19.svg', alt='Imagen decorativa')
              .col-lg
                p.mb-4 Para insertar un comentario:
                .cajon.cajon.C01.mb-3
                  ol.lista-ol--cuadro.lista-ol--separador
                    li(data-aos="fade-down") 
                      .lista-ol--cuadro__vineta
                        span.text-bold 1
                      span Seleccione la palabra, frase o párrafo sobre el cual desee hacer la anotación.
                    li(data-aos="fade-down") 
                      .lista-ol--cuadro__vineta
                        span.text-bold 2
                      span Diríjase a la pestaña “Revisar” en la cinta de opciones.
                    li(data-aos="fade-down") 
                      .lista-ol--cuadro__vineta
                        span.text-bold 3
                      | Haga clic en “Nuevo comentario”.
                    li(data-aos="fade-down") 
                      .lista-ol--cuadro__vineta
                        span.text-bold 4
                      | Escriba la observación correspondiente en el margen derecho del documento.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema5/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo03(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Importante
        p Los comentarios #[b no afectan el texto original] y pueden #[b responderse, editarse o eliminarse] en cualquier momento. Esto los convierte en una herramienta ideal para procesos de #[b revisión colectiva, tutorías, corrección de estilo o revisión técnica.]

    .row.justify-content-center.mb-5
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema5/img-20.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Consejo:] cuando varias personas colaboran en el mismo documento, cada comentario queda marcado con el nombre del revisor, lo que permite identificar fácilmente quién hizo cada aporte o sugerencia.

    .titulo-segundo.color-acento-contenido
      h2#t_5_3 5.3 Comparación de documentos

    p(data-aos="fade-down") La función #[b Comparar documentos] permite analizar dos versiones de un mismo archivo y visualizar sus diferencias de forma clara. Word genera un #[b tercer documento] que muestra los cambios detectados (inserciones, eliminaciones y modificaciones).
    p(data-aos="fade-down") Para comparar dos documentos:

    .tarjeta--BG01.px-md-5.p-lg-0.p-4.mb-5
      .row.justify-content-center.align-items-center.my-lg-5.my-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4.desktop
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema5/img-07.png", alt="alt" style='margin-bottom: -23px;')
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-4 col-xl-4")
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema5/img-08.svg", alt="alt")
              p.text-center 1. Ir a la pestaña #[b “Revisar”].
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema5/img-09.svg", alt="alt")
              p.text-center 2. Hacer clic en #[b “Comparar”].
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema5/img-10.svg", alt="alt")
              p.text-center 3. Seleccionar el documento original y el documento modificado.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema5/img-11.svg", alt="alt")
              p.text-center 4. Presionar #[b Aceptar] para generar la comparación.
            .tarjeta.bgslyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema5/img-12.svg", alt="alt")
              p.text-center 5. Revisar el documento combinado con las marcas de cambio visibles.

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-10.col-12
        p A continuación, se incluye la figura que corresponde a la herramienta de comparación de documentos, empleada para identificar diferencias entre versiones.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 19.
          span <em>Ventana de comparación de documentos</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema5/img-18.png', alt='Figura 19 que describe la ventana Comparar documentos de Word con campos para seleccionar archivo original y archivo revisado. ')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema5/img-18.png', alt='Figura 19 que describe la ventana Comparar documentos de Word con campos para seleccionar archivo original y archivo revisado. ')

    .row.justify-content-center.mb-5
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema5/img-14.svg', alt='').m-auto
          .col-xl
            p.mb-0 #[b Sugerencia:] esta herramienta es útil cuando varias personas editan diferentes copias del mismo documento o cuando se quiere verificar qué cambios se hicieron entre versiones.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo02(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Ejercicio práctico 5:

    p.mb-5 Por medio del siguiente video, podrá conocer paso a paso cómo activar el control de cambios, insertar comentarios y comparar documentos en Microsoft Word.

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
