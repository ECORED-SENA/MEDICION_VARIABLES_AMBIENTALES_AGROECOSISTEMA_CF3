<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Apreciado aprendiz, bienvenido a este nuevo componente de formación, llamado <b>Reporte de resultados de medición</b>, donde se presentan y analizan los resultados de la medición de variables e indicadores ambientales del agroecosistema seleccionado. Se invita a observar el siguiente video que explica la temática que se abordará:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6X9Wdf8HwEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
import BannerInterno from '@/components/BannerInterno.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
