<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A lo largo de este componente formativo, se abordaron diferentes herramientas de Microsoft Word que facilitan la elaboración de documentos estructurados, claros y estandarizados.  Desde la inserción de tablas y figuras, pasando por la gestión de referencias y la generación de tablas de contenido, hasta el uso de plantillas y herramientas de revisión.  Estas funciones, al integrarse, permiten producir documentos profesionales, organizados y colaborativos. En el diagrama se presenta el esquema general del componente.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema de la síntesis del componente formativo que representa un diagrama sobre la aplicación de normas de estilo en Microsoft Word, donde se agrupan los apartados “Tablas y Figuras”, “Referencias y Bibliografía”, “Tablas de contenido”, “Plantillas” y “Herramientas de revisión”, cada uno con sus subtemas que constituyen las funciones principales, como inserción de tablas, gestión de fuentes bibliográficas, creación de plantillas y uso del control de cambios.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
