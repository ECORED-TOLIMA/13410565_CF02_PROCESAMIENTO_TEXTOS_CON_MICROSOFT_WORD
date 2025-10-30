<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Referencias y bibliografía en Microsoft Word

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-01.svg', alt='Imagen decorativa')
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-left")
        p.mb-4 Cuando se elaboran documentos académicos, informes técnicos, trabajos escritos o artículos, es frecuente incluir información obtenida de otras fuentes, como libros, artículos, sitios #[em web] o informes digitales. Para #[b dar crédito a las fuentes consultadas] y mantener un estilo de citación ordenado, Microsoft Word incluye un #[b gestor de referencias integrado].
        .cajon.cajon.color-primario.p-4.mb-4
          p.mb-0 Este gestor permite #[b almacenar la información bibliográfica] de cada fuente en un solo lugar, reutilizarla en diferentes documentos y generar automáticamente una lista de referencias al final. De esta manera, se evitan errores de transcripción, se ahorra tiempo y se garantiza un formato uniforme en todas las citas.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo02(style="z-index:1")
        .p-1
          h3.mb-0.ms-3 Importancia de las referencias y bibliografía

    .tarjeta.tarjeta--BG01.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img-07.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img-02.svg", alt="alt").img100.m-auto
              p Permiten dar crédito a las fuentes de información utilizadas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img-03.svg", alt="alt").img100.m-auto
              p Evitan el plagio y respaldan la credibilidad de un documento.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img-04.svg", alt="alt").img100.m-auto
              p Facilitan la creación de bibliografías con un solo clic.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img-05.svg", alt="alt").img100.m-auto
              p Aseguran uniformidad en el estilo de citación.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img-06.svg", alt="alt").img100.m-auto
              p Aceleran el trabajo editorial y de investigación.

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span <em>Pestaña “Referencias” en Word</em>          
      .row.justify-content-center
        .col-12
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img-08.png', alt='La imagen de la figura 6 muestra la pestaña “Referencias” de Microsoft Word, con las opciones para insertar citas, administrar fuentes, elegir el estilo de citación y generar la bibliografía automáticamente.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema2/img-08.png', alt='La imagen de la figura 6 muestra la pestaña “Referencias” de Microsoft Word, con las opciones para insertar citas, administrar fuentes, elegir el estilo de citación y generar la bibliografía automáticamente.')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1. Agregar y administrar fuentes bibliográficas

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.mb-4(data-aos="flip-up")
        p Antes de insertar una cita en el texto, es necesario registrar la fuente en el #[b Administrador de referencias]. Word permite añadir fuentes de diferentes tipos, libros, artículos de revista, sitios #[em web] o documentos electrónicos. A continuación, se enumeran los pasos para agregar nueva fuente y se ilustran en la figura 7:

      .row.justify-content-center
        .col-lg-6.order-lg-1.order-2.mb-4(data-aos="fade-right")
          .cajon.cajon.C01.p-1.mb-3
            ol.lista-ol--cuadro.lista-ol--separador
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                span Dirigirse a la pestaña #[b “Referencias”] en la cinta de opciones.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                span Hacer clic en #[b “Insertar cita”] y luego en #[b “Agregar nueva fuente”].
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                span Seleccionar el tipo de fuente (por ejemplo: libro, artículo de revista, sitio #[em web]).
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Completar los campos correspondientes: autor, título, año, editorial, URL, etc.
              li(data-aos="fade-down")
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                span Confirmar con #[b “Aceptar”].

        .col-lg-4.col-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema2/img-09.svg', alt='Imagen decorativa')
        
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span <em>Ventana para agregar nueva fuente</em>
          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img-10.png', alt='La figura 7 muestra la ventana “Crear fuente” de Microsoft Word, utilizada para registrar los datos bibliográficos de un libro (autor, título, año, ciudad y editorial) al agregar una nueva referencia.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema2/img-10.png', alt='La figura 7 muestra la ventana “Crear fuente” de Microsoft Word, utilizada para registrar los datos bibliográficos de un libro (autor, título, año, ciudad y editorial) al agregar una nueva referencia.')

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-10.col-12
        p Una vez guardada, la fuente quedará registrada y podrá ser reutilizada en cualquier parte del documento sin tener que volver a escribirla.

    .row.justify-content-center.mb-0
      .col-xl-10
        .cajon.cajon.color-secundario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema2/img-11.svg', alt='').m-auto
          .col-xl
            p.mb-0 Sugerencia: llenar todos los campos posibles mejora la precisión y consistencia de las referencias generadas.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2. Inserción de citas en el texto

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-12.png', alt='Imagen decorativa')
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-left")
        p.mb-4 Después de registrar las fuentes, Word permite #[b insertar citas directamente en el texto], siguiendo el estilo bibliográfico seleccionado (por ejemplo: APA, MLA, Chicago, ISO, etc.). Esto garantiza uniformidad y evita errores comunes en la citación manual.  Los pasos para realizarlo se presentan a continuación y se ilustran en la figura 8:
        .cajon.cajon.C01.mb-3
          ol.lista-ol--cuadro.lista-ol--separador
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Colocar el cursor en el lugar del texto donde debe aparecer la cita.
            li(data-aos="fade-down") 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              span Ir a la pestaña #[b “Referencias”].
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 3
              span Hacer clic en #[b “Insertar cita”].
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Seleccionar la fuente previamente guardada.
            li(data-aos="fade-down")
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Word insertará automáticamente la cita con el formato elegido.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span <em>Inserción de cita en Word</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img-13.png', alt='En la figura 8 presenta la Inserción Dinámica de Citas: Representa la lista de fuentes disponibles al hacer clic en "Insertar cita", demostrando cómo aplicar una cita directamente en el texto con el formato bibliográfico elegido, garantizando uniformidad y evitando errores manuales.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema2/img-13.png', alt='En la figura 8 presenta la Inserción Dinámica de Citas: Representa la lista de fuentes disponibles al hacer clic en "Insertar cita", demostrando cómo aplicar una cita directamente en el texto con el formato bibliográfico elegido, garantizando uniformidad y evitando errores manuales.')

    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo02(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Ejemplo de resultado
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 (García, 2022)

        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema2/img-14.svg', alt='').m-auto
          .col-xl
            p.mb-0 La cita se insertará en el lugar exacto donde se ubique el cursor y se actualizará automáticamente si se modifica la información de la fuente.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3. Generación automática de bibliografía

    .bg-c1.px-md-5.px-4.mb-0
      .row.justify-content-center.mb-4(data-aos="fade-left")
        p(data-aos="fade-down") Además de insertar citas individuales, Word permite #[b generar una bibliografía completa o lista de referencias] de todas las fuentes utilizadas en el documento. Esto elimina la necesidad de redactar manualmente las referencias y asegura que el formato sea consistente.
        p(data-aos="fade-down") Para generar una bibliografía:

      .row.justify-content-center
        .col-lg-3.col-sm-7.col-10.mb-4(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema2/img-15.svg', alt='Imagen decorativa')

        .col-lg-7(data-aos="fade-left")
          .cajon.cajon.C01.p-0.mb-5
            ol.lista-ol--cuadro.lista-ol--separador
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Ubicar el cursor en la parte final del documento (o en el lugar donde se desee insertar la lista).
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                span Ir a la pestaña #[b “Referencias”].
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                span Hacer clic en #[b “Bibliografía”].
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 4
                | Seleccionar uno de los estilos predefinidos.
              li(data-aos="fade-down") 
                .lista-ol--cuadro__vineta
                  span.text-bold 5
                | Word insertará automáticamente la lista completa de referencias.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span <em>Opciones de bibliografía en Word</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img-16.png', alt='La figura 9  indica la forma de Generación Automática de Bibliografía: Muestra el menú "Bibliografía", que permite crear automáticamente la lista completa de referencias utilizadas en el documento con un solo clic, asegurando consistencia de formato.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema2/img-16.png', alt='La figura 9  indica la forma de Generación Automática de Bibliografía: Muestra el menú "Bibliografía", que permite crear automáticamente la lista completa de referencias utilizadas en el documento con un solo clic, asegurando consistencia de formato.')

    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-lg-10.col-12
        .row.align-items-center.mb-4(data-aos="zoom-in")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/temas/tema1/punto.svg', style="width: 10px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo02(style="z-index:1")
            .p-1
              h3.mb-0.ms-3 Ejemplo de bibliografía generada automáticamente (APA)
        ul.lista-ul--color.mb-4
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Frutiger, A. (2012). El libro de la tipografía. Editorial GG.  
          li(data-aos="fade-left")
            i.fas.fa-hand-point-right
            p.mb-0 Cassany, D. (2019). Laboratorio lector: para entender la lectura. Anagrama. 

        .cajon.cajon.color-primario.row.align-items-center.m-0.style___box_1(data-aos="zoom-in").espacio___movil_1
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/tema2/img-21.svg', alt='').m-auto
          .col-xl
            p.mb-0 Si se agregan o eliminan citas en el documento, la bibliografía se puede actualizar fácilmente con un solo clic derecho sobre la lista y seleccionando “Actualizar campos”.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4. Estilos de citación y actualización de fuentes

    p.mb-5(data-aos="fade-down") Word incluye varios #[b estilos de citación] reconocidos internacionalmente. Esto permite adaptar la presentación de citas y bibliografías a diferentes contextos académicos o profesionales. Los más comunes son:

    .row.mb-5
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5(style="border: 3px solid #B0C2E5")
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b APA (American Psychological Association)
          p.text-center.mb-0 Frecuente en trabajos académicos en ciencias sociales y educación.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100(style="border: 3px solid #6EC7E3")
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b MLA (Modern Language Association) 
          p.text-center.mb-0 Usado en humanidades y literatura.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-secundario.p-5.h-100(style="border: 3px solid #D5C6EA")
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Chicago
          p.text-center.mb-0 Habitual en historia y ciencias sociales.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-acento-botones.p-5.h-100(style="border: 3px solid #C4F7E8")
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b ISO 690 
          p.text-center.mb-0 Estándar internacional para referencias generales. 

    .row.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--C01.mb-5.tarjeta
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/temas/tema2/img-19.svg', alt='Imagen decorativa')
              .col-lg
                p.mb-4 Para cambiar el estilo de citación:
                .cajon.cajon.C01.mb-3
                  ol.lista-ol--cuadro.lista-ol--separador
                    li(data-aos="fade-down") 
                      .lista-ol--cuadro__vineta
                        span.text-bold 1
                      span Ir a la pestaña #[b “Referencias”].
                    li(data-aos="fade-down") 
                      .lista-ol--cuadro__vineta
                        span.text-bold 2
                      span Buscar el menú #[b “Estilo”].
                    li(data-aos="fade-down") 
                      .lista-ol--cuadro__vineta
                        span.text-bold 3
                      | Seleccionar el estilo deseado de la lista desplegable.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span <em>Menú de estilos de citación en Word</em>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema2/img-20.png', alt='En la figura 10 se Presenta el menú "Estilo", donde se puede seleccionar un estándar académico (APA, ISO 690, Chicago, etc.). El cambio se aplica automáticamente a todas las citas y referencias existentes, clave para la adaptación contextual.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema2/img-20.png', alt='En la figura 10 se Presenta el menú "Estilo", donde se puede seleccionar un estándar académico (APA, ISO 690, Chicago, etc.). El cambio se aplica automáticamente a todas las citas y referencias existentes, clave para la adaptación contextual.')

    p.mb-4.text-center(data-aos="fade-down") Este cambio se aplicará automáticamente a todas las citas y referencias ya insertadas, evitando tener que modificarlas una por una.

    .row.justify-content-center.align-items-center(data-aos="fade-down")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema2',
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
