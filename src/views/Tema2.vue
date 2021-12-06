<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informes de medición
    .row.mb-5.align-items-center
      .col-lg-4(data-aos='fade-right')
        img(src='@/assets/curso/14.jpg', alt='Texto que describa la imagen' style='width: 332px;')
      .col-lg-8(data-aos='fade-left')
        p El <b>informe de la medición</b> de variables ambientales del agroecosistema es un reporte escrito con la descripción del proceso de recolección de la información a través del plan de muestreo, los resultados de la medición y las conclusiones útiles para la toma de decisiones acerca del plan de manejo del agroecosistema.
          br
          br
          |Estos datos recolectados y organizados deben ser proyectados en un informe o reporte escrito donde se describan de manera clara y gráfica las características del agroecosistema estudiado. 
    p.mb-5 El informe de medición debe contener unos elementos básicos que se conocerán a continuación:
    #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='8' aria-label='Slide 9')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='9' aria-label='Slide 10')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='10' aria-label='Slide 1')
      .carousel-inner
        .carousel-item.active
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    h4 Elementos básicos:
                    p El informe de medición debe incluir los siguientes elementos básicos:
                    ol.lista-ol--cuadro
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold 1
                        b Alcance de la medición.
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold 2
                        b Plan de muestreo.
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold 3
                        b Resultados de la medición.
                  .col-lg-5: img(src='@/assets/curso/15.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    h4 Alcance de la medición
                    p Debe indicar claramente qué variables se van a medir, el objetivo de la medición, qué se puede medir y qué no se puede medir, la localización del área de estudio, en este caso del agroecosistema, qué equipos se van a usar, por cuánto tiempo se va a realizar la medición, entre otros.
                  .col-lg-5: img(src='@/assets/curso/16.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    h4 Plan de muestreo
                    p Debe indicar cómo se estructuró el plan de muestreo, cuántas muestras se recolectaron y bajo qué protocolo, cuántos análisis de laboratorio se realizaron, y en general, todas las especificaciones técnicas definidas en el ítem de Plan de Muestreo. 
                  .col-lg-5: img(src='@/assets/curso/17.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    h4 Resultados de la medición
                    p En este punto se incluye la información procesada a partir de los registros diligenciados de la medición de las variables. Es ideal presentar los resultados en tablas y con gráficos que faciliten el análisis de la información, por lo tanto, es recomendable llevar los registros de forma digital o mixta para facilitar la presentación de los resultados. En el punto anterior, se presentó un ejemplo de registro de un inventario de mesofauna del suelo. 
                  .col-lg-5: img(src='@/assets/curso/18.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    p Para presentar el resultado de esa medición, se puede presentar el resultado del registro en diferentes gráficos de barras. El siguiente gráfico de barras me permite observar el resultado y comportamiento del conteo de individuos por orden o clase, y los cambios de las poblaciones por fecha del muestreo y por tipo de muestra.
                  .col-lg-5: img(src='@/assets/curso/19.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    h4 Ejemplo
                    p Si se presenta el mismo resultado del registro en otro tipo de gráfico de barras con los totales del conteo en porcentajes, se puede visualizar el orden o clase de individuos predominantes en el suelo en todas las mediciones realizadas. Así las cosas, la información se puede presentar en diferentes gráficos para observar diferentes comportamientos. 
                  .col-lg-5: img(src='@/assets/curso/20.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    h4 Conclusiones
                    p La presentación de los resultados por sí sola, no aporta mayor información a la medición de las variables ambientales. Es necesario analizarla para sacar conclusiones y tomar decisiones en cuanta al manejo del agroecosistema, en especial, a las prácticas con un impacto directo sobre el suelo, el agua y la biodiversidad. Además, cada conclusión se debe contrastar y soportar con bibliografía técnica y científica, con el fin de dar validez al estudio.
                  .col-lg-5: img(src='@/assets/curso/21.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    p Continuando con el ejemplo, se pueden sacar las siguientes conclusiones a partir del muestreo realizado:
                    ol.lista-ol--cuadro
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold a
                        p El <b>suelo del agroecosistema</b> evaluado, presenta más de nueve (9) órdenes/clases de entomofauna lo que indica un nivel de biodiversidad importante en el suelo. 
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold b
                        p El <b>orden Hymenoptera</b> (hormigas para el ejemplo) predominó en la medición. Es importante destacar el rol de las hormigas en el suelo como dispersoras de semillas, en el control de algunos insectos plagas y descomposición de la materia orgánica, por lo tanto, su presencia en el suelo es un indicador de calidad y salud del suelo. 
                  .col-lg-5: img(src='@/assets/curso/22.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    p Cada elemento del informe se debe desarrollar teniendo en cuenta los siguientes aspectos básicos de redacción:
                    ul.lista-ul
                      li 
                        i.vineta1
                        p <b>Orden lógico:</b> el informe debe seguir un orden lógico, es decir, incluir los elementos básicos descritos anteriormente, los cuales se deben visualizar con subtítulos o apartados debidamente numerados o indicados.
                      li 
                        i.vineta2
                        p <b>Coherencia:</b> las ideas y conclusiones deben estar técnica y científicamente soportadas por fuentes bibliográficas que las apoyen, no que las contradigan.
                      li 
                        i.vineta3
                        p <b>Consistencia:</b> se deben usar correctamente la sintaxis y los tiempos para la redacción (pasado, presente, futuro).
                  .col-lg-5: img(src='@/assets/curso/23.jpg', alt='Texto que describa la imagen')
        .carousel-item
          .row.mb-5.justify-content-center
            .col-lg-9
              .tarjeta.bg--1-claro.p-5
                .row.justify-content-center.align-items-center
                  .col-lg-7
                    p De otra parte, para elaborar <b>el informe se cuenta actualmente con herramientas ofimáticas</b>, que sirven para organizar, analizar y presentar la información. Estas son algunas de las herramientas ofimáticas que pueden apoyar la elaboración del informe:
                    ol.lista-ol--cuadro
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold a
                        p <b>Procesadores de textos:</b> redacción del informe.
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold b
                        p <b>Desarrollo de hojas de cálculo:</b> análisis de los datos, cualitativos y cuantitativos, y graficar resultados. 
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold c
                        p <b>Herramientas de presentación multimedia:</b> elaborar una presentación gráfica de resultados.
                      li 
                        .lista-ol--cuadro__vineta.text-system
                          span.fw-bold d
                        p <b>Programas de E-Mail:</b> enviar o compartir el informe, o subirlo a plataformas para trabajo en línea. 
                  .col-lg-5: img(src='@/assets/curso/24.jpg', alt='Texto que describa la imagen')
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
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
