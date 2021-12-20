<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Registros
    .row.mb-5.align-items-center
      .col-lg-4(data-aos='fade-right')
        img(src='@/assets/curso/0.jpg', alt='Texto que describa la imagen' style='width: 332px;')
      .col-lg-8(data-aos='fade-left')
        p <b>Diligenciar los registros</b> en la medición de variables ambientales de un agroecosistema, es un proceso de gran importancia para recopilar los datos y la información de las diferentes variables a medir. Por esta razón, la elaboración de los <b>formatos</b> o de las <b>lanillas</b>, <b>debe corresponder con lo definido en el plan de muestreo</b>, en términos de frecuencia de la medición, lugares, equipos de medición, tipo de muestras, unidades de medición, entre otros. Los formatos o planillas y los registros son dos elementos diferentes. A continuación, se podrán ver sus explicaciones: 
    .row.mb-5.justify-content-center.g-5
      .col-lg-4(data-aos='fade-right')
        .tarjeta-hover.tarjeta.bg--1.p-4.hover-flip.hover.hover-bg--3(@mouseover="mostrarIndicador= false"  style='height: 443px ; width: 335px ').d-flex.align-items-center
          .indicador--hover(v-if="mostrarIndicador")
          .contenido
            img(src="@/assets/curso/3.svg" alt="Adornos flotantes" style="width: 74px").mb-3.m-auto
            h4.text-center.text-white Formato o Planilla
            p.text-center.text-white Es el instrumento de recolección de datos diseñado antes de la medición.
          .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/1.jpg')})`}")
      .col-lg-4(data-aos='fade-right')
        .tarjeta-hover.tarjeta.bg--1.p-4.hover-flip.hover.hover-bg--3(@mouseover="mostrarIndicador= false")(style='height:443px ; width: 335px').d-flex.align-items-center
          .contenido
            img(src="@/assets/curso/4.svg" alt="Adornos flotantes" style="width: 74px").mb-3.m-auto
            h4.text-center.text-white Registro
            p.text-center.text-white Es el formato ya diligenciado y se constituye como documento que evidencia un resultado obtenido o una actividad desarrollada, por lo tanto, no está sujeta a cambios.
          .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/2.jpg')})`}")
    h4 Tipo de registros para la medición de variables ambientales 
    p.mb-5 A continuación, se conocerán los diferentes tipos de registros que existen para la medición de variables ambientales que pueden ser aplicadas para documentar resultados del monitoreo según el procedimiento establecido.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/k9XUkgCGnGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Teniendo en cuenta los diferenteks tipos de registros, también se puede clasificar según la variable que se está midiendo de la siguiente manera:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Registros de calidad del Suelo" :icono="require('@/assets/curso/5.svg')")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Registros de calidad del Suelo
            p Medición de la textura, medición de parámetros químicos, inventario de mesofauna del suelo, fertilidad, entre otros.
        
          .col-md-5
            figure
              img(src='@/assets/curso/8.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Registros de calidad de Agua" :icono="require('@/assets/curso/6.svg')")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Registros de calidad de Agua
            p Seguimiento microbiológico, inventario de insectos acuáticos, pH, conductividad, demanda química de oxígeno, entre otros.
        
          .col-md-5
            figure
              img(src='@/assets/curso/9.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Registros de Biodiversidad" :icono="require('@/assets/curso/7.svg')")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            h4 Registros de Biodiversidad
            p Inventario de biodiversidad, inventario de bioindicadores, inventario por sectores de un agroecosistema (bosque, cultivos, corredores de fuentes hídricas), inventario en aire, suelo, aguas, entre otros. 
        
          .col-md-5
            figure
              img(src='@/assets/curso/10.jpg', alt='Texto que describa la imagen')
    p.mb-5 Elementos básicos de un registro para la medición de variables ambientales
    ImagenInfografica.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/11.svg', alt='Texto que describa la imagen')
          figcaption Nota. SENA (2021).

      .tarjeta.color-secundario.p-3(x="35%" y="4%" numero="A")
        .h5.mb-2 
        p Nombre del registro.
      .tarjeta.color-secundario.p-3(x="86%" y="5%" numero="B")
        .h5.mb-2 
        p <b>Código:</b> es importante codificar los formatos para efectos de los sistemas de gestión de calidad y para las actualizaciones o ajustes que requieran los formatos.
      .tarjeta.color-secundario.p-3(x="8%" y="20%" numero="C")
        .h5.mb-2 
        p <b>Ubicación:</b> debe indicar el lugar donde se levanta la información. 
      .tarjeta.color-secundario.p-3(x="39%" y="15%" numero="D")
        .h5.mb-2 
        p <b>Detalles adicionales:</b> muestreo, la muestra, el método de recolección, entre otros.
      .tarjeta.color-secundario.p-3(x="34%" y="24%" numero="E")
        .h5.mb-2 
        p <b>Fecha y hora:</b> del momento del muestreo. 
      .tarjeta.color-secundario.p-3(x="52%" y="48%" numero="F")
        .h5.mb-2 
        p <b>Información:</b> registro, dato, resultado de la medición
      .tarjeta.color-secundario.p-3(x="7%" y="76%" numero="G")
        .h5.mb-2 
        p Responsable (s) del registro.
      .tarjeta.color-secundario.p-3(x="16%" y="85%" numero="H")
        .h5.mb-2 
        p <b>Observaciones:</b> información complementaria.
    p.mb-5 En cuanto a la elaboración de los formatos para el registro de medición de variables ambientales es necesario tener en cuenta las necesidades y particularidades que ofrece el muestreo; es necesario diferenciar cuáles son los apropiados para aplicar en un agroecosistema como herramienta efectiva:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Construcción de Registros" :icono="require('@/assets/curso/5.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Construcción de Registros
            p Los registros deben contener al menos los siguientes elementos:

              
              br
              br
              b Nombre del registro: 
              | debe indicar claramente la información que se va a recolectar. 
              
              br
              b Código: 
              | es importante codificar los formatos para efectos de los sistemas de gestión de calidad y para las actualizaciones o ajustes que requieran los formatos.
              
              br
              b Ubicación: 
              | debe indicar el lugar donde se levanta la información. 
              
              br
              b Detalles adicionales: 
              | deben indicar información complementaria relacionada con el muestreo, la muestra, el método de recolección, entre otros.
              
              br
              b Fecha y hora: 
              | del momento del muestreo. 
              
              br
              b Información: 
              | aquí se consigna la información del registro correspondiente a los datos cualitativos o cuantitativos de las variables ambientales del agroecosistema. 
              
              br
              b Responsable (s) del registro: 
              | se debe agregar para efecto de aclaraciones de la información y para ampliar detalles del muestreo. 
              
              br
              b Observaciones: 
              | este campo es de gran importancia porque complementa la medición, aclara situaciones que afectan el muestreo o sugieren ajustes en el muestreo y logística de la recolección de la información. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/12.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Construcción de un formato " :icono="require('@/assets/curso/6.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 La construcción de un formato 
            p Para el registro de medición de variables ambientales se hace en función de las necesidades y particularidades del muestreo, del estudio y del agroecosistema, en ese sentido, no todos los formatos sirven como modelo para aplicar en cualquier agroecosistema, sino que se deben elaborar o ajustar según el caso. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/12.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Diligenciamiento de un formato " :icono="require('@/assets/curso/7.svg')")
        .row.justify-content-center
          .col-md-8.mb-4.mb-md-0
            h4 El diligenciamiento de un formato debe considerar los siguientes aspectos:
            ul.lista-ul
              li 
                i.vineta
                | Se debe registrar la información en su totalidad. No deben quedar espacios sin diligenciar.
                br
                |El responsable del registro debe tener la competencia para diligenciar la información.

              li 
                i.vineta
                | Debe conocer sobre la temática para evitar errores o imprecisiones. Por ejemplo, si va a registrar datos de un muestreo de aguas debe conocer las unidades de las variables a registrar (°C, ppm, %, etc.) y el funcionamiento de los equipos de muestreo.

              li 
                i.vineta
                | Los registros deben reflejar la realidad de la actividad registrada o del resultado obtenido, por lo tanto, no deben ser alterados o modificados. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/12.svg', alt='Texto que describa la imagen')
    p.mb-5 Además, es importante conocer cómo se aplican los registros para conocer las variables ambientales que se van a estudiar, con el fin de fortalecer la información que se desea recopilar en campo:
    .c--1
      h3.c--1 Aplicabilidad de los Registros
      p.col-4.c--1 Los registros son muy útiles para evaluar y monitorear la situación ambiental del agroecosistema, entre otras aplicaciones:
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/13.svg', alt='Texto que describa la imagen')

      .tarjeta.bg-naranja.p-3(x="25%" y="30%" numero="")
        p Sirven como historial ambiental del agroecosistema.
      .tarjeta.bg-naranja.p-3(x="62%" y="37%" numero="")
        p Permite medir el impacto positivo o negativo de las prácticas de manejo ecológico o agroecológico, o el avance del agroecosistema cuando se avanza en un proceso de reconversión o transición. 
      .tarjeta.bg-naranja.p-3(x="67%" y="8%" numero="")
        p Permiten observar cambios bruscos en el agroecosistema y analizar la fuente del problema. Por ejemplo: un descenso en la población de abejas puede indicar alguna fuente de contaminación con agroquímicos.
      .tarjeta.bg-naranja.p-3(x="22%" y="40%" numero="")
        p Son documentos válidos tenidos en cuenta en procesos de certificación ecológica o de esquemas de sostenibilidad.
      .tarjeta.bg-naranja.p-3(x="45%" y="42%" numero="")
        p Sirven para comparar el agroecosistema con otros aledaños.
      .tarjeta.bg-naranja.p-3(x="50%" y="60%" numero="")
        p Son un insumo esencial para graficar y procesar la información ambiental del agroecosistema, y en general del plan de manejo aplicado. 
      .tarjeta.bg-naranja.p-3(x="32%" y="70%" numero="")
        .h5.mb-2 
        p Son evidencias útiles para procesos pedagógicos o de investigación. 


















              
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras,
    BannerInterno, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    mostrarIndicador: true,
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

<style lang="sass">

.bg-naranja
  background-color: #eec48a !important
</style>
